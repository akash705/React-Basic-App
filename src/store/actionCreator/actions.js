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
            setTimeout(data=>{
                console.log('second dispatch');
               dispatch({
                   type:'requestComplete',
                   data:[]
               })
            },1000)
        }, 2000);
    }


    // thunk code
}
export default action