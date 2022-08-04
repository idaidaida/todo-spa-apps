import { todoPageStore } from "../store/TodoPageStore.js";

export class TodoListComponent{

    renderPage = (todos) => {
        let html = `
            <div class="card">
                <div class="card-header">Todos</div>
                <div class="card-body">
                    <form class="mb-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="js-add-form" placeholder="New todo item">
                            <button type="button" class="input-group-text bg-primary text-white" id="js-add-btn">Add</button>
                        </div>
                    </form>
                    <ul class="list-group list-group-flush" id="js-todos">
        `;
        if(todos != undefined){
            todos.forEach(todo => {
                html += `<li class="list-group-item  list-group-item-action js-todo-item" data-todo-id="${todo.id}" style="cursor: pointer;"><div class="ml-auto text-muted text-sm fw-light" data-todo-id="${todo.id}"><small data-todo-id="${todo.id}">Due: ${todo.due_date}</small></div><div data-todo-id="${todo.id}">${todo.title}</div></li>`;
            });
        }
        html += `</ul></div></div>`;
        document.getElementById("my-todo-list").innerHTML = html;

        // set event listner
        document.getElementById("js-add-btn").addEventListener('click',() => {
            const title = document.getElementById("js-add-form").value;
            let todo = {title: title,detail: 'Non', due_date: '2022-08-03'}
            todoPageStore.addTodos(todo);
        },false)

        // set event listner
        let todoItems = document.querySelectorAll(".js-todo-item");
        todoItems.forEach(item => {
            item.addEventListener('click', (event) => {
                console.log(event.target);
                console.log(event.target.matches("li"));
                if (event.target) {
                    const todoId = event.target.getAttribute("data-todo-id");
                    todoPageStore.selectTodo(todoId);
                }
            })
        })

    }

    constructor(){

        // rendering this page
        this.renderPage.call();

        // set event listner
        // this listner will be called when todo list is updated.
        todoPageStore.addChangeListner(this,this.renderPage);
    }
}