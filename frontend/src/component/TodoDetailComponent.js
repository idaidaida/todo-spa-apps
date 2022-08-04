import { todoPageStore } from "../store/TodoPageStore.js";

export class TodoDetailComponent{

    renderPage = (todo) => {
        console.log("detail")
        console.log(todo);
        let id = '';
        let title = '';
        let detail = '';
        let dueDate = '';

        let html = "";

        if(todo != undefined){
            id = todo.id;
            title = todo.title;
            detail = todo.detail;
            dueDate = todo.due_date;

            html += `
            <div class="card">
                <div class="card-header">Detail</div>
                <div class="card-body">
                    <div class="mb-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="js-edit-toggle">
                            <label class="form-check-label" for="js-edit-toggle">Edit</label>
                        </div>
                    </div>
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
                    <div id="js-display-update-btn"></div>
                </div>
            </div>
            `;
            document.getElementById("my-todo-detail").innerHTML = html;

            document.getElementById("js-edit-toggle").addEventListener("click",(event) => {
                let isEditMode = event.target.checked;
                console.log(isEditMode);
                if(isEditMode){
                    console.log("IS EDIT MODE");
                    document.getElementById("dueDate").disabled = false;
                    document.getElementById("dueDate").readOnly = false;
                    document.getElementById("title").disabled = false;
                    document.getElementById("title").readOnly = false;
                    document.getElementById("detail").disabled = false;
                    document.getElementById("detail").readOnly = false;
                    document.getElementById("js-display-update-btn").innerHTML = `<button class="btn btn-primary" id="js-update-btn">Update</button><i class="bi bi-trash px-3 text-danger" id="js-delete" style="cursor: pointer"></i>`;


                    document.getElementById("js-update-btn").addEventListener("click",() => {
                        let newDueDate = document.getElementById("dueDate").value;
                        let newTitle = document.getElementById("title").value;
                        let newDetail = document.getElementById("detail").value;
                        todoPageStore.updateTodo({id: todo.id, title: newTitle, detail: newDetail, due_date: newDueDate});
                    })


                }else{
                    document.getElementById("dueDate").disabled = true;
                    document.getElementById("dueDate").readOnly = true;
                    document.getElementById("title").disabled = true;
                    document.getElementById("title").readOnly = true;
                    document.getElementById("detail").disabled = true;
                    document.getElementById("detail").readOnly = true;
                    document.getElementById("js-display-update-btn").innerHTML = ``;
                }
                
            })
        }else{
            html += `
            <div class="card">
                <div class="card-header">Detail</div>
                <div class="card-body"></div>
            </div>
            `;

            document.getElementById("my-todo-detail").innerHTML = html;
        }

    }

    constructor(todo){
        this.renderPage.call();
        todoPageStore.addSelectedTodoIdChangeListners(this,this.renderPage);
    }

}