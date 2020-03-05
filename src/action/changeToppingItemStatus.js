import { CHANGE_TOPPING_ITEM_STATUS } from '../constant/actionType';

export const changeToppingItemStatus = (selected) => ({
    type: CHANGE_TOPPING_ITEM_STATUS,
    payload: selected
});
