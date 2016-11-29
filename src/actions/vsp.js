
import data from '../data/hack-data'
import type {Dispatch} from '../types/actions'


export const requestData = () => {
    return {
        type: "REQUEST_DATA"
    }
};

export const receiveData = (json) => {
    return {
        type: "RECEIVE_DATA",
        data: json
    }
};

export const fetchData = () => (dispatch: Dispatch) => {

    dispatch(requestData());
    setTimeout(function() {
        dispatch(receiveData(data));
    }, 1000);

    //TODO replace timeout for a fetch statement that fetches the actual data instead of stubbing it via a file..
    /*return fetch(`https://aws.blablabla...?mod_assn=..`)
        .then(response => response.json())
        .then(json => dispatch(receiveData(json)))*/
};


export const selectTableVariable = (variable) => {

    console.log("baaaaaaam");
    console.log(variable);
    return {
        type: "SELECT_VARIABLE",
        variable: variable
    }
};
