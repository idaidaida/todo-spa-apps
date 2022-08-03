class TodoPageStore{

    object;

    todos = [];

    setTodos(todos){
        this.todos = todos;
    }

    addTodos(todo){
        this.todos.push(todo);
    }

    getTodos(){
        return this.todos;
    }

}

// singletonにしたくてこうした。あってるのかな。。
export let todoPageStore = new TodoPageStore();