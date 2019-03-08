import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function x(){
    return new Promise((res,rej)=>{
        setTimeout(data=>{
            console.log('promise resolved');
            res();
        },2000);
    })
}
function* mySaga() {
    yield takeLatest("requestComplete",x);
    console.log('my saga completed');
}
export default mySaga;