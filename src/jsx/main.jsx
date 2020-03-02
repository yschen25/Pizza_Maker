import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/MenuList';
import Topping from './component/Topping';
import toppingsList from './data/Data';
import axios from 'axios';

class Pizza extends React.Component {
    constructor(props) {
        super(props);
        this.chooseToppings = this.chooseToppings.bind(this);
        this.state = toppingsList;
    }


    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/yschen25/Pizza_maker/sequence')
            .then(function (response) {

                console.log('response', response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Choose toppings
    chooseToppings(e) {

        // Show check icon
        const check = e.target.getAttribute('data-check');
        const newCheck = (check === 'check') ? 'noCheck' : 'check';
        this.setState({
            toppings: {
                ...this.state.toppings,
                [e.target.id]: { number: e.target.getAttribute('data-number'), isCheck: newCheck }
            }
        });

        // Combine topping's name and quantity
        const selectedTopping = e.target.id + '/' + e.target.getAttribute('data-number');

        this.state.selectedToppings.includes(selectedTopping) ?
            this.setState({selectedToppings: [...this.state.selectedToppings.filter(val => val !== selectedTopping)] }) :
            this.setState({selectedToppings: [...this.state.selectedToppings, selectedTopping] });
    }

    render() {
        return (
            <div>
                <h1>Pizza Maker</h1>
                <div className="pizzaWrapper">
                    <div className="pizza">
                        <Topping selectedToppings={this.state.selectedToppings} />
                    </div>
                </div>
                <div className="menu">
                    <MenuList toppings={this.state.toppings} chooseToppings={this.chooseToppings} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Pizza />, document.getElementById('app'));
