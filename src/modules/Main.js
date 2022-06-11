const Main = (page) => {
    const content = document.querySelector('#main-container');
    
    const titlesection = document.createElement("DIV");
    titlesection.className = "mt-3 ms-3";

    const mainTitle = document.createElement("H1");
    mainTitle.className = "text-light";
    mainTitle.textContent = page;

    titlesection.appendChild(mainTitle);

    content.appendChild(titlesection);
}

export default Main;