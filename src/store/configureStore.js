import {createStore} from "redux"
import {pizzaReducer} from "../reducer"

const store = createStore(pizzaReducer);

export {store}