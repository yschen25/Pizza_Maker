import { ADD_TOPPINGS } from '../constant/actionType';

export const addToppings = (toppings) => ({
    type: ADD_TOPPINGS,
    payload: toppings
});
