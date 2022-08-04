import { todoPageStore } from "../store/TodoPageStore.js";

export class TodoDetailComponent{

    renderPage = (todo) => {
        console.log(todo);
        let title = '';
        let detail = '';
        let dueDate = '';
        if(todo != undefined){
            title = todo.title;
            detail = todo.detail;
            dueDate = todo.due_date;
        }
        const html = `
            <div class="card">
                <div class="card-header">Detail</div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="dueDate" class="form-label">Due date</label>
                        <input type="text" class="form-control" id="dueDate" value="${dueDate}" disabled readonly>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" value="${title}" disabled readonly>
                    </div>
                    <div class="mb-3">
                        <label for="detail" class="form-label">Detail</label>
                        <textarea class="form-control" id="detail" rows="3" disabled readonly>${detail}</textarea>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("my-todo-detail").innerHTML = html;
    }

    constructor(todo){
        this.renderPage.call();
        todoPageStore.addSelectedTodoIdChangeListners(this,this.renderPage);
    }

}