import { TodoListComponent } from "../component/TodoListComponent.js";

class TodoPageStore{

    changeListners = [];

    object;

    todos = [];

    setTodos(todos){
        this.todos = todos;
        this.executeChangeListner();
    }

    addTodos(todo){
        this.todos.push(todo);
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