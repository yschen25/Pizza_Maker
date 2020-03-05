import {
    ADD_TOPPINGS, CHANGE_TOPPING_ITEM_STATUS, CHOOSE_TOPPINGS, REMOVE_TOPPINGS
} from '../constant/actionType';

const initState = {
    selectedToppings: [],
    toppings: {}
};

const pizzaReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TOPPINGS:
            return {
                ...state,
                toppings: action.payload.toppings
            };
        case CHOOSE_TOPPINGS:
            return {
                ...state,
                selectedToppings: [...state.selectedToppings, action.payload]
            };
        case REMOVE_TOPPINGS:
            return {
                ...state,
                selectedToppings: [
                    ...state.selectedToppings.filter((val) => val !== action.payload)
                ]
            };
        case CHANGE_TOPPING_ITEM_STATUS:
            return {
                ...state,
                toppings: {
                    ...state.toppings,
                    [action.payload.name]: {
                        ...state.toppings[action.payload.name],
                        isCheck: action.payload.isCheck === false ? 'check' : 'noCheck'
                    }
                }
            };
        default:
            return state;
    }
};

export default pizzaReducer;
