class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           padding: 16px;
           display: flex;
           position: sticky;
           top: 10px;
           margin-right: auto;
           margin-left: auto;

       }
      
       .search-container > input {
           border-radius: 5px;
           width: 75%;
           font-size: 15px;
           padding: 10px;
       }
      
       .search-container > input:focus {
           outline: 0;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: black;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           border-radius: 5px;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background: linear-gradient(129.55deg, #FE8C00 -8.99%, #F83600 127.32%);
           color: black;
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 50%;
               margin-right: auto;
               margin-left: auto;
           }
       }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search Recipe" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);