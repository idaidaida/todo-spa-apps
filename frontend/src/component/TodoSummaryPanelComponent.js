export class TodoSummaryPanelComponent{

    constructor(){
        const html = `
            <div class="row">
                <div class="col">
                    <div class="card bg-success text-white border-0">
                        <div class="card-body">
                            <div>Total</div>
                            <div class="fs-3">100 todos</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-warning text-white border-0">
                        <div class="card-body">
                            <div>Total</div>
                            <div class="fs-3">100 todos</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-danger text-white border-0">
                        <div class="card-body">
                            <div>Total</div>
                            <div class="fs-3">100 todos</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("my-summary-panel").innerHTML = html;


    }
}