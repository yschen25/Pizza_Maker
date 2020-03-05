import { createStore, combineReducers, compose } from 'redux';
import pizzaReducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const todoApp = combineReducers({
    pizza: pizzaReducer
});

const store = createStore(todoApp, {}, composeEnhancer());

export default store;
