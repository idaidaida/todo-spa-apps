export class TodoListComponent{

    constructor(){
        const html = `
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
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        `;

        document.getElementById("my-todo-list").innerHTML = html;
    }
}