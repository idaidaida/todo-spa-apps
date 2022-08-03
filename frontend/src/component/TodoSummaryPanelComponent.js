import { todoPageStore } from "../store/TodoPageStore.js";
export class TodoSummaryPanelComponent{

    renderPage = (todos) => {
        let totalTodosNum = '-';
        let expiredSoonTodosNum = '-';
        let expiredTodosNum = '-';
        if(todos != undefined){
            totalTodosNum = todos.length;

            expiredSoonTodosNum = todos.filter((todo) => {
                let dueDate = new Date(todo.due_date); 
                let today = new Date();
                let criteriaDate = new Date();
                criteriaDate.setDate(today.getDate() + 7);
                return dueDate <= criteriaDate && dueDate > today;
            }).length;

            expiredTodosNum = todos.filter((todo) => {
                let dueDate = new Date(todo.due_date); 
                let today = new Date();
                
                return dueDate <= today;
            }).length;
        }
        const html = `
            <div class="row">
                <div class="col">
                    <div class="card bg-success text-white border-0">
                        <div class="card-body">
                            <div>Total</div>
                            <div class="fs-3">${totalTodosNum} todos</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-warning text-white border-0">
                        <div class="card-body">
                            <div>Expired soon</div>
                            <div class="fs-3">${expiredSoonTodosNum} todos</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-danger text-white border-0">
                        <div class="card-body">
                            <div>Expired</div>
                            <div class="fs-3">${expiredTodosNum} todos</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("my-summary-panel").innerHTML = html;
    }


    constructor(){
        this.renderPage();
        todoPageStore.addChangeListner(this,this.renderPage);
    }
}