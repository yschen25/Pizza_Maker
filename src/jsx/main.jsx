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

        console.log(e.target.id);
        console.log(this.state.selectedToppings);

        if (this.state.selectedToppings.isShow === 'show') {
            this.setState({
                selectedToppings: [...this.state.selectedToppings.filter(val => {

                        console.log(val.key);
                        console.log(e.target.id);
                        return val.text !== e.target.text
                    }
                )]
            });

            console.log(this.state.selectedToppings);
        } else {

            const selectedTopping = {
                'key': e.target.id,
                'text': e.target.getAttribute('data-name'),
                'number': e.target.getAttribute('data-number'),
                'isShow': 'show'
            };

            this.setState({
                selectedToppings: [...this.state.selectedToppings, selectedTopping]
            });

            console.log(this.state.selectedToppings);
        }

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
