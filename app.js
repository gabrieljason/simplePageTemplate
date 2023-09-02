/*IMPORT ALL WEB COMPONENTS */

import { StartPage } from './web-components/startPage.js';
import { SecondPage } from './web-components/secondPage.js';


document.addEventListener('DOMContentLoaded', function (){
  checkUrlForId();

  function checkUrlForId(){
    let url = window.location.href;
    if(url.includes('#')){
      let id = url.split('#')[1];
        hideShowSections(id);
      
    }
  }
  
  
  
  
  function hideShowSections(id){
    let sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if(section.id !== id){
        section.style.display = 'none';
        }
        else{
          section.style.display = 'block';
        }
      });
  }



  window.onpopstate = function(event) {    
    checkUrlForId();
  }

/*
const links = document.querySelectorAll('[data-target]');
links.forEach(link => {
  link.addEventListener('click', showSection);
});


function showSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('data-target');
  window.location.href='/#'+target;
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const section = document.querySelector(`#${target}`);
  section.style.display = 'block';
}*/
/*
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});*/


});