import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/MenuList.jsx';
import Topping from './component/Topping.jsx';
import toppingsList from './data/Data.jsx';

class Pizza extends React.Component {
    constructor(props) {
        super(props);
        this.chooseToppings = this.chooseToppings.bind(this);
        this.state = toppingsList;
    }

    // Choose toppings
    chooseToppings(e) {

        // Combine topping's name and quantity
        const selectedTopping = e.target.id + '/' + e.target.getAttribute('data-number');

        this.state.selectedToppings.includes(selectedTopping) ?
            this.setState({selectedToppings: [...this.state.selectedToppings.filter(val => val !== selectedTopping)]}):
            this.setState({selectedToppings: [...this.state.selectedToppings, selectedTopping]});
    }

    render() {
        return <div>
            <h1>Pizza Maker</h1>
            <div className="pizzaWrapper">
                <div className="pizza">
                    <Topping toppingsList={this.state.selectedToppings}/>
                </div>
            </div>
            <div className="menu">
                <MenuList chooseToppings={this.chooseToppings}/>
            </div>
        </div>
    }
}

ReactDOM.render(<Pizza/>, document.getElementById('app'));
