import {ADD_TOPPINGS, CHOOSE_TOPPINGS} from '../constant/actionType';
import getNewList from '../constant/data';

const pizzaReducer = (state = getNewList, action) => {
    switch (action.type) {
        case ADD_TOPPINGS:
            break;
        case CHOOSE_TOPPINGS:
            break;
        default:
            return getNewList;
    }
};

export {pizzaReducer}