export class HeaderComponent{

    constructor(){
        const html = `
            <nav class="navbar navbar-dark bg-primary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Todo apps</span>
                </div>
            </nav>
        `;

        document.getElementById("my-header").innerHTML = html;
    }
}