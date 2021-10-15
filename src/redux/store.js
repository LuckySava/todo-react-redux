import { combineReducers, createStore, applyMiddleware } from 'redux'
import todoReducer from './todo-reducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk'


let reducers = combineReducers({
    todoReducer
});

let store = createStore(reducers, applyMiddleware(thunk, logger));

// window.store = store;
export default store 