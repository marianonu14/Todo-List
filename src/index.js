import './scss/style.scss';
import 'bootstrap';
import Main from './pages/Main'
import Home from './pages/Home'
import AddProject from './pages/AddProject'

const content = document.querySelector ('#main-container');
const btnToday = document.querySelector ('#btn-today');
const btnWeek = document.querySelector ('#btn-week');
const btnHome = document.querySelector ('#btn-home');

Main('Home');


//Aside Buttons

btnToday.addEventListener('click', () => {
    reset();
    Main('Today');
});

btnWeek.addEventListener('click', () => {
    reset();
    Main('Week');
});

btnHome.addEventListener('click', () => {
    reset();
    Main('Home');
});


//Reading Form Data

const modal = document.querySelector ('#modal');
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

formTitle.addEventListener('blur', () => {
    if(formTitle.value.length > 0){
        formTitle.classList.remove("border-danger");
        enableBtn();
      } else {
        formTitle.classList.add("border-danger");
        btnSubmit.disabled = true;
      }
});

formDate.addEventListener('blur', () => {
    if(formDate.value.length > 0){
        formDate.classList.remove("border-danger");
        enableBtn();
      } else {
        formDate.classList.add("border-danger");
        btnSubmit.disabled = true;
      }
});
function enableBtn() {
    if(formTitle.value != "" && formDate.value != "") {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

formProject.addEventListener('submit', (e) => {
    e.preventDefault();

    AddProject(formTitle.value);
    
    Home(formTitle.value,formDate.value);

});


//Reset Display

function reset () {
    const content = document.querySelector('#main-container');
    while (content.children.length > 0){
        content.children[0].remove();
    }
}





