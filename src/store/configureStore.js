import { createStore, combineReducers, compose } from 'redux';
import pizzaReducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makerApp = combineReducers({
    pizza: pizzaReducer
});

const store = createStore(makerApp, {}, composeEnhancer());

export default store;
