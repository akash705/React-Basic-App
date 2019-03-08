import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function x(){
    // return new Promise((res,rej)=>{
    //     setTimeout(data=>{
    //         res();
    //     },2000);
    // })
}
function* mySaga() {
    yield takeLatest("requestComplete",x);
}
export default mySaga;