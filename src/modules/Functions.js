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

export {reset, enableBtn};