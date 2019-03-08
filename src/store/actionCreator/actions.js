import thunk from 'redux-thunk';

const action=(data)=>{
    console.log('********************');
    // thunks code
    return (dispatch,getstate)=>{
    console.log('********************');
        setTimeout(() => {
            console.log(getstate());
            dispatch( {
                type:'requestComplete',
                data:data
            });
        }, 2000);
    }


    // thunk code
}
export default action