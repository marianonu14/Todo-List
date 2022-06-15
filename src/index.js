import './scss/style.scss';
import 'bootstrap';
import Main from './modules/Main';
import Home from './modules/Home';
import AddProject from './modules/AddProject';
import {reset, enableBtn} from './modules/Functions';
import {setLocalStorage, getLocalStorage} from './modules/LocalStorage';

const btnToday = document.querySelector ('#btn-today');
const btnWeek = document.querySelector ('#btn-week');
const btnHome = document.querySelector ('#btn-home');


//On Load

let data = getLocalStorage();

window.addEventListener('load', () => {
    Main('Home');
    if(data != null){
        Home(data);
        AddProject(data);
    } 
})

//Aside Buttons

btnToday.addEventListener('click', () => {
    reset();
    Main('Today');
    AddProject(getLocalStorage());
});

btnWeek.addEventListener('click', () => {
    reset();
    Main('Week');
    AddProject(getLocalStorage());
});

btnHome.addEventListener('click', () => {
    reset();
    Main('Home');
    Home(getLocalStorage());
    AddProject(getLocalStorage());
});


//Form

const formProject = document.querySelector ('#form');
const formTitle = document.querySelector ('#form-title');
const formDate = document.querySelector ('#form-date');
const btnNewProject = document.querySelector ('#btnModal');
const btnSubmit = document.querySelector ('#btn-newProject');


btnNewProject.addEventListener('click', () => {
    btnSubmit.disabled = true;
    formTitle.classList.remove("border-danger");
    formDate.classList.remove("border-danger");
    formTitle.value = "";
    formDate.value = "";
});

//Validation Form

formTitle.addEventListener('blur', () => {
    if(formTitle.value.length > 0){
        formTitle.classList.remove("border-danger");
        enableBtn(formTitle.value, formDate.value);
      } else {
        formTitle.classList.add("border-danger");
        enableBtn(formTitle.value, formDate.value);
      }
});

formDate.addEventListener('blur', () => {
    if(formDate.value.length > 0){
        formDate.classList.remove("border-danger");
        enableBtn(formTitle.value, formDate.value);
      } else {
        formDate.classList.add("border-danger");
        enableBtn(formTitle.value, formDate.value);
      }
});

//Submit Data

formProject.addEventListener('submit', (e) => {
    e.preventDefault();

    const projects = {
        title: formTitle.value,
        date: formDate.value
    };

    setLocalStorage(projects);
    reset();
    Main('Home');
    Home(getLocalStorage());
    AddProject(getLocalStorage());
});