export class TodoDetailComponent{

    constructor(){
        const html = `
            <div class="card">
                <div class="card-header">Detail</div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" disabled readonly>
                    </input>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" disabled readonly></textarea>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("my-todo-detail").innerHTML = html;
    }

}