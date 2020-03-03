import {ADD_TOPPINGS, CHOOSE_TOPPINGS} from '../constant/actionType';
import getNewList from '../constant/data';

const pizzaReducer = (state = getNewList, action) => {
    switch (action.type) {
        case ADD_TOPPINGS:
            break;
        case CHOOSE_TOPPINGS: {
            this.state.selectedToppings.includes(selectedTopping) ?
                this.setState({selectedToppings: [...this.state.selectedToppings.filter(val => val !== selectedTopping)]}) :
                this.setState({selectedToppings: [...this.state.selectedToppings, selectedTopping]});
        }
            break;
        default:
            // return getNewList();

            return {
                "toppings": {
                    "bacon": {
                        "number": 12,
                        "isCheck": "noCheck"
                    },
                    "mushroom": {
                        "number": 8,
                        "isCheck": "noCheck"
                    },
                    "pepperoni": {
                        "number": 8,
                        "isCheck": "noCheck"
                    },
                    "onion": {
                        "number": 12,
                        "isCheck": "noCheck"
                    },
                    "pineapple": {
                        "number": 8,
                        "isCheck": "noCheck"
                    },
                    "pepper": {
                        "number": 10,
                        "isCheck": "noCheck"
                    },
                    "basil": {
                        "number": 16,
                        "isCheck": "noCheck"
                    },
                    "shrimp": {
                        "number": 10,
                        "isCheck": "noCheck"
                    },
                    "tomato": {
                        "number": 6,
                        "isCheck": "noCheck"
                    },
                    "cucumber": {
                        "number": 8,
                        "isCheck": "noCheck"
                    },
                    "chilli": {
                        "number": 6,
                        "isCheck": "noCheck"
                    },
                    "olive": {
                        "number": 10,
                        "isCheck": "noCheck"
                    }
                },
                "selectedToppings": []
            }

    }
};

export {pizzaReducer}