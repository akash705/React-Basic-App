var initialState={
    originalData:[],
    FilteredData:[],
}

var reducer = (state=initialState,action)=>{
    switch(action.type){
        case ("requestComplete"):{
            console.log(action.data);
            return {
                ...state,
                originalData:action.data
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