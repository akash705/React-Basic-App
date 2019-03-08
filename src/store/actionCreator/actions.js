import thunk from 'redux-thunk';

const action=(data)=>{
    console.log('********************');
    // thunks code
    return (dispatch)=>{
    console.log('********************');
        setTimeout(() => {
            dispatch( {
                type:'requestComplete',
                data:data
            });
        }, 2000);
    }


    // thunk code
}
export default action