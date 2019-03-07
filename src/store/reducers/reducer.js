var initialState={
    originalData:[],
    filteredData:[],
}

var reducer = (state=initialState,action)=>{
    switch(action.type){
        case ("requestComplete"):{
            return {
                originalData:[...action.data],
                filteredData:[...action.data]
            }
        };
        case ("requestFailed"):{
            return {
                ...state,
                originalData:action.data
            }
        };
        case ("requestComplete"):{
            return {
                ...state,
                originalData:action.data
            }
        };

    }
    return state;
}
export default reducer;