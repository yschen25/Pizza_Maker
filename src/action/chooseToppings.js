import { CHOOSE_TOPPINGS } from '../constant/actionType';

export const chooseToppings = (name) => ({
    type: CHOOSE_TOPPINGS,
    payload: name
});
