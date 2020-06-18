import React, {createContext, useReducer} from 'react'
import axios from "axios";

import AppReducer from './AppReducer'

//initial bug state 
const initialBugState ={
    bugs:[

    ]
};

//Create bug context 
export const GlobalBugContext = createContext(initialBugState);


//Provider component 
export const GlobalBugProvider = ({ children }) =>{
const [state, dispatch] = useReducer(AppReducer, initialBugState);


// Actions 
function deleteBug(id){
    dispatch({
        type: 'DELETE_BUG',
        payload:id
    });
}

function addBug(bug){
    dispatch({
        type:'ADD_BUG',
        payload: bug
    });
}



return(<GlobalBugContext.Provider value={{
    bugs: state.bugs,
    deleteBug,
    addBug,
    // viewBug
    
}}>
{children}

</GlobalBugContext.Provider>)






}