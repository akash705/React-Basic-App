import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

var middleware=(store)=>{
    return (next)=>{
        return (action)=>{
            console.log('middleWare');
            return next(action);
        }
    }
}

var store = createStore(reducer,applyMiddleware(middleware,thunk));

export default store;
