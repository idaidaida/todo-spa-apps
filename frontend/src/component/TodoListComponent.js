import { todoPageStore } from "../store/TodoPageStore.js";

export class TodoListComponent{

    renderPage = (todos) => {

        console.log(todos);

        let html = `
            <div class="card">
                <div class="card-header">Todos</div>
                <div class="card-body">
                    <form class="mb-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="New todo item">
                            <button type="button" class="input-group-text bg-primary text-white">Add</button>
                        </div>
                    </form>
                    <ul class="list-group list-group-flush">
        `;

        if(todos != undefined){
            todos.forEach(todo => {
                html += `<li class="list-group-item">${todo.title}</li>`;
            });
        }

        html += `</ul></div></div>`;

        document.getElementById("my-todo-list").innerHTML = html;
    }

    constructor(){

        // rendering this page
        this.renderPage.call();

        // set event listner
        // this listner will be called when todo list is updated.
        todoPageStore.addChangeListner(this,this.renderPage);
    }
}