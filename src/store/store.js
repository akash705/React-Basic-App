import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import mySaga from './sagas/tempsaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()


var middleware=(store)=>{
    return (next)=>{
        return (action)=>{
            console.log('middleWare');
            return next(action);
        }
    }
}

var store = createStore(reducer,applyMiddleware(middleware,thunk,sagaMiddleware));
sagaMiddleware.run(mySaga);


export default store;
