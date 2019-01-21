import { createStore } from 'redux';
import { default as reducer } from './reducer';

const store = createStore(reducer);

console.log(store.getState());

export default store;