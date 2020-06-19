export default(state, action)=>{


    switch(action.type){
        case 'DELETE_BUG':
            return{
                ...state,
                bugs: state.bug.filter(bug =>bug._id !== action.payload)
            }
        case 'ADD_BUG':
            return{
                    ...state,
                    bugs:[action.payload, ...state.bugs]
            }
          
                default:
                    return state;
    }
}