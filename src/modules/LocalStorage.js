
const setLocalStorage = (object) => {
    
    let data = getLocalStorage();
    
    if (data != null){
        data.push(object);

        return localStorage.setItem("Project",JSON.stringify(data));
    } else {
        let array = [];

        array.push(object); 

        return localStorage.setItem("Project",JSON.stringify(array));
    }
}

const getLocalStorage = () => {
    
    let getArray = JSON.parse(localStorage.getItem("Project"));

    return getArray;
}

export {setLocalStorage,getLocalStorage};