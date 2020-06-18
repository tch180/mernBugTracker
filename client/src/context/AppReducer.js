export default(state, action)=>{


    switch(action.type){
        case 'DELETE_BUG':
            return{
                ...state,
                bugs: state.bug.filter(bug =>bug.id !== action.payload)
            }
        case 'ADD_BUG':
            return{
                    ...state,
                    bugs:[action.payload, ...state.bugs]
            }
        // case 'VIEW_BUGS':
        //     return{
        //         ...state,
        //         bugs: payload,
        //         error:null,
                
        //     }    
                default:
                    return state;
    }
}