import {reset, enableBtn} from './Functions';
import {setLocalStorage, getLocalStorage} from './LocalStorage';

const Home = (data) => {
    
    data.forEach( element => {
        const content = document.querySelector('#main-container');

        const mainDiv = document.createElement("DIV");
        mainDiv.className = "d-flex justify-content-between align-items-center mt-3 p-2 bg-light text-dark rounded";
        
        
        const projectTitle = document.createElement("DIV");
        projectTitle.textContent = element.title;
                
        const projectDate = document.createElement("DIV");
        projectDate.textContent = element.date;
        
    
        const btnRemove = document.createElement("button");
        btnRemove.textContent = "Remove";
        btnRemove.className = "btn btn-danger";
        btnRemove.id = ('btn-remove');

        btnRemove.addEventListener('click', (e) => {
            
            const elementOnClick = e.target.parentElement.children[0].textContent;

            const prueba = data.filter(element => element.title != elementOnClick);

            console.log(prueba);
        });

    
        mainDiv.appendChild(projectTitle);
        mainDiv.appendChild(projectDate);
        mainDiv.appendChild(btnRemove);
    
        content.appendChild(mainDiv);
    });

}

export default Home;