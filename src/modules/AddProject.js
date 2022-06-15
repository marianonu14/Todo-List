const AddProject = (data) => {
    
    data.forEach( element => {
        const contentList = document.querySelector('#project-list');
    
        const div = document.createElement('div');
        div.className = 'btn btn-outline-secondary text-start w-100 mb-2 p-1';
        
        div.textContent = element.title;
    
        contentList.appendChild(div);
    });

}

export default AddProject;