import { ADD_TOPPINGS, CHOOSE_TOPPINGS } from '../constant/actionType';
import getNewList from '../constant/data';

const pizzaReducer = (state = getNewList, action) => {
    switch (action.type) {
        case ADD_TOPPINGS:
        break;
        case CHOOSE_TOPPINGS:{
            this.state.selectedToppings.includes(selectedTopping) ?
                this.setState({selectedToppings: [...this.state.selectedToppings.filter(val => val !== selectedTopping)]}) :
                this.setState({selectedToppings: [...this.state.selectedToppings, selectedTopping]});
        }
            break;
        default:
                return getNewList();
    }
};

export {pizzaReducer}