import { HeaderComponent } from "../component/HeaderComponent.js";
import { TodoSummaryPanelComponent } from "../component/TodoSummaryPanelComponent.js";
import { TodoListComponent } from "../component/TodoListComponent.js";
import { TodoDetailComponent } from "../component/TodoDetailComponent.js";
import { todoPageStore } from "../store/TodoPageStore.js"

export class TodoPage{

    constructor() {
        const html = `
            <div id="my-header"></div>

            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col">
                        <h1>Todo</h1>
                    </div>
                </div>
                <div id="my-summary-panel"></div>
                <div class="row mt-3">
                    <div class="col">
                        <div id="my-todo-list"></div>
                    </div>
                    <div class="col">
                        <div id="my-todo-detail"></div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("app").innerHTML = html;

        // import sub component
        let headerComponent = new HeaderComponent();
        let summaryPanelComponent = new TodoSummaryPanelComponent();
        let todoListComponent = new TodoListComponent();
        let todoDetailComponent = new TodoDetailComponent();

        // fetch data
        this.load();
    }

    async load(){
        try {
            todoPageStore.fetchTodos();
        } catch (error) {
            console.log(error.message);
        }
    }

}