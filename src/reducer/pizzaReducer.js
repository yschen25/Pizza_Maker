import {ADD_TOPPINGS, CHOOSE_TOPPINGS} from '../constant/actionType';
import response from '../constant/data';

const pizzaReducer = (state = response, action) => {
    switch (action.type) {
        case ADD_TOPPINGS:
            return response;
        case CHOOSE_TOPPINGS:
            break;
        default:
            return response; // 不要在 reducer 做非同步
    }
};

export {pizzaReducer}