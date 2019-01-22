import { createStore, applyMiddleware } from 'redux';
import { default as reducer } from './reducer';
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

console.log(store.getState());

export default store;