class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           nav{
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            
            }
                    
            nav h1{
                text-align: center;
            }
       </style>
       <nav>
            <h1>AllRecipes</h1>
       </nav>
      
        `;
    }
}

customElements.define("app-bar", AppBar);