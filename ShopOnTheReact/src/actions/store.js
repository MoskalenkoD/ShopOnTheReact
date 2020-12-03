import deviceReducer from './deviceReducer';
import {createStore} from 'redux';

const Store = createStore(deviceReducer);

export default Store;
