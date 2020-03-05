import { REMOVE_TOPPINGS } from '../constant/actionType';

export const removeToppings = (name) => ({
    type: REMOVE_TOPPINGS,
    payload: name
});
