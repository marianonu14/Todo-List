import './scss/style.scss';
import 'bootstrap';
import Main from './modules/Main';
import Render from './modules/Render';
import AddProject from './modules/AddProject';
import {reset, validationForm, app} from './modules/Functions';
import {setLocalStorage, getLocalStorage} from './modules/LocalStorage';

//Btn
const btnToday = document.querySelector ('#btn-today');
const btnWeek = document.querySelector ('#btn-week');
const btnHome = document.querySelector ('#btn-home');

//Form
const formProject = document.querySelector ('#form');
const formTitle = document.querySelector ('#form-title');
const formDate = document.querySelector ('#form-date');
const btnNewProject = document.querySelector ('#btnModal');
const btnSubmit = document.querySelector ('#btn-newProject');


//On Load
let data = getLocalStorage();

window.addEventListener('load', () => {
    Main('Home');
    if(data){
        Render(data);
        AddProject(data);
    } 
})

//Aside Buttons

btnToday.addEventListener('click', () => {
    if(data){
       app('Today');
    } else {
        reset();
        Main('Today');
    }
});

btnWeek.addEventListener('click', () => {
    if(data){
        app('Week');
    } else {
        reset();
        Main('Week');
    }
});

btnHome.addEventListener('click', () => {
    if(data){
        app('Week');
    } else {
        reset();
        Main('Home');
    }
});

btnNewProject.addEventListener('click', () => {
    btnSubmit.disabled = true;
    formTitle.classList.remove("border-danger");
    formDate.classList.remove("border-danger");
    formTitle.value = "";
    formDate.value = "";
});

//Validation Form

formTitle.addEventListener('blur', () => {
    validationForm(formTitle);
});

formDate.addEventListener('blur', () => {
    validationForm(formDate);
});

//Submit Data

formProject.addEventListener('submit', (e) => {
    e.preventDefault();

    const projects = {
        title: formTitle.value,
        date: formDate.value
    };

    setLocalStorage(projects);
    app('Home');
});