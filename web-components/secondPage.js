// Define your web component
export class SecondPage extends HTMLElement {

    constructor() {
      super();

  
    }
    connectedCallback() {

          this.innerHTML =  `
          <div class="contentContainer">
            <h3>Just a simple Second Page :)</h3>
            </div>
            `;
         

  }
}

  // Register your web component
  customElements.define('second-page', SecondPage);
   
