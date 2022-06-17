import Render from './Render';
import AddProject from './AddProject';
import Main from './Main';
import {getLocalStorage} from './LocalStorage';

function app(page) {
    reset();
    Main(page);
    Render(getLocalStorage());
    AddProject(getLocalStorage());
}

function reset () {
    const content = document.querySelector('#main-container');
    while (content.children.length > 0){
        content.children[0].remove();
    }
    const contentList = document.querySelector('#project-list');
    while (contentList.children.length > 0){
        contentList.children[0].remove();
    }
}

function enableBtn(title,date) {
    const btnSubmit = document.querySelector ('#btn-newProject');
    
    if(title != "" && date != "") {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

function validationForm(input) {
    const formTitle = document.querySelector ('#form-title');
    const formDate = document.querySelector ('#form-date');

    if(input.value.length > 0){
        input.classList.remove("border-danger");
        enableBtn(formTitle.value, formDate.value);
      } else {
        input.classList.add("border-danger");
        enableBtn(formTitle.value, formDate.value);
      }
}

export {reset, enableBtn,validationForm,app};