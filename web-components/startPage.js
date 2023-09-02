// Define your web component Name must be same as Filename
export class StartPage extends HTMLElement {

    constructor() {
      super();

  
    }
    connectedCallback() {

        let lang = document.getElementById('currentLang').dataset.lang; 
        
      /* INSERT FETCH SOURCE URL OR FILE */
        fetch('../data/data.json')
        .then(response => response.json())
        .then(response => {


        
          var template =
          `
          <div class="contentContainer">
          <img class="bannerImg" src="../media/shroom.jpg" alt="StartShroom" />

              <p>${response['infoTxt'+lang]}</p>
            <button>${response['btnTxt'+lang]}</button>
          </div>
          `
     
          this.innerHTML = template;

    
         

        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  // Register your web component
  customElements.define('start-page', StartPage);
   
