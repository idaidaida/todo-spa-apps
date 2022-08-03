import { TodoListComponent } from "../component/TodoListComponent.js";
import { postData,fetchData } from "../util/Util.js";
class TodoPageStore{

    changeListners = [];
    todos = [];

    async fetchTodos(){
        let todos = await fetchData("http://localhost:3000/todos");
        this.todos = todos;
        this.executeChangeListner();
    }

    async addTodos(todo){
        try {
            let todos = await postData("http://localhost:3000/todos",todo);
            this.todos.push(todo);
        } catch (error) {
            console.log(error.message);
        }
        this.executeChangeListner();
    }

    getTodos(){
        return this.todos;
    }

    addChangeListner(targetClass,targetMethod){
        this.changeListners.push({targetClass,targetMethod});
    }

    executeChangeListner(){
        this.changeListners.forEach(changeListner => {
            changeListner.targetMethod.call(changeListner.targetClass,this.todos);
        });
    }

}

// singletonにしたくてこうした。あってるのかな。。
export let todoPageStore = new TodoPageStore();