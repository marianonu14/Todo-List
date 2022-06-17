import {reset,app} from './Functions';
import Main from './Main';

const setLocalStorage = (object) => {
    
    let data = getLocalStorage();
    
    if (data){
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

const deleteLocalStorage = (newObject) => {
    window.localStorage.clear();

    if(newObject.length > 0){
        newObject.forEach(element => {
            setLocalStorage(element);
        });
        app('Home');
    } else {
        window.localStorage.clear();
        reset();
        Main('Home'); 
    }
}

export {setLocalStorage,getLocalStorage,deleteLocalStorage};