const initialstate={
    cond: 0,
    over: false,
};

const reducer= (state= initialstate ,action) =>{
    switch(action.type){
        case 'SET_RIGHT':
            return {
                ...state,
                cond: action.payload,
            };
        case 'SET_WRONG':
            return {
                ...state,
                cond: action.payload,
            };
         
        case 'SET_OVER':
            return {
                ...state,
               over: action.payload,
            };
            
        default:
           return  state;
    }
};
export default reducer;