import {createStore} from 'redux';
import reducer from './reducers/reducer';


var store = createStore(reducer);

export default store;
