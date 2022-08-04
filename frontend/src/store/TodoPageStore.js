import { TodoListComponent } from "../component/TodoListComponent.js";
import { postData,fetchData,putData,deleteData } from "../util/Util.js";
class TodoPageStore{

    todoChangeListners = [];
    selectedTodoIdChangeListners = [];
    todos = [];
    selectedTodoId;

    async fetchTodos(){
        let todos = await fetchData("http://localhost:3000/todos");
        this.todos = todos;
        this.callTodoChangeListner();
    }

    async addTodos(todo){
        try {
            let todos = await postData("http://localhost:3000/todos",todo);
            this.todos.push(todo);
        } catch (error) {
            console.log(error.message);
        }
        this.callTodoChangeListner();
    }

    async selectTodo(id){
        console.log("call");
        this.selectedTodoId = id;
        let todo = await fetchData(`http://localhost:3000/todos/${this.selectedTodoId}`);
        this.callSelectedTodoIdChangeListner(todo);
    }

    async updateTodo(todo){
        await putData(`http://localhost:3000/todos/${todo.id}`,todo);
        await fetchData("http://localhost:3000/todos");
        //this.callSelectedTodoIdChangeListner(todo);
        this.callTodoChangeListner();
    }

    async deleteTodo(id){
        await deleteData(`http://localhost:3000/todos/${id}`,{});
        await fetchData("http://localhost:3000/todos");
        //this.callSelectedTodoIdChangeListner(todo);
        this.callTodoChangeListner();
    }

    getTodos(){
        return this.todos;
    }

    addChangeListner(targetClass,targetMethod){
        this.todoChangeListners.push({targetClass,targetMethod});
    }

    addSelectedTodoIdChangeListners(targetClass,targetMethod){
        this.selectedTodoIdChangeListners.push({targetClass,targetMethod});
    }

    callTodoChangeListner(){
        this.todoChangeListners.forEach(changeListner => {
            changeListner.targetMethod.call(changeListner.targetClass,this.todos);
        });
    }

    callSelectedTodoIdChangeListner(todo){
        this.selectedTodoIdChangeListners.forEach(changeListner => {
            changeListner.targetMethod.call(changeListner.targetClass,todo);
        });
    }

}

// singletonにしたくてこうした。あってるのかな。。
export let todoPageStore = new TodoPageStore();