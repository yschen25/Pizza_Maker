import React from 'react';
import MenuList from '../menuList/MenuList';
import Topping from '../topping/Topping';
import getNewList from '../../constant/data';

class Pizza extends React.Component {
    constructor(props) {
        super(props);
        this.chooseToppings = this.chooseToppings.bind(this);
        this.state = {toppings: {}, selectedToppings: []};
    }

    // Render
    componentDidMount() {
        this.getJsonData();
    }

    // Get menu list
    getJsonData = () => {
        const _this = this;
        const data = getNewList();
        data.then((res) => _this.setState({toppings: res}));
    };

    // Choose toppings
    chooseToppings(e) {

        // Show check icon
        const check = e.target.getAttribute('data-check');
        const newCheck = (check === 'check') ? 'noCheck' : 'check';
        this.setState({
            toppings: {
                ...this.state.toppings,
                [e.target.id]: {number: e.target.getAttribute('data-number'), isCheck: newCheck}
            }
        });

        // Combine topping's name and quantity
        const selectedTopping = e.target.id + '/' + e.target.getAttribute('data-number');
        this.props.chooseToppings(selectedTopping);
    }

    render() {
        return (
            <div>
                <h1>Pizza Maker</h1>
                <div className="pizzaWrapper">
                    <div className="pizza">
                        <Topping />
                    </div>
                </div>
                <div className="menu">
                    <MenuList />
                </div>
            </div>
        );
    }
}

export {Pizza};