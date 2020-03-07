import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuList from '../menuList/menuList';
import Topping from '../topping/topping';
import { addToppings } from '../../action';

class Pizza extends React.Component {
    componentDidMount() {
        const { dispatchAddToppingsState } = this.props;

        // Get data
        axios.get('https://my-json-server.typicode.com/yschen25/Pizza_maker/db')
            .then((response) => {
                dispatchAddToppingsState(response.data);
            })
            .catch((error) => console.log(error));
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

Pizza.propTypes = {
    dispatchAddToppingsState: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAddToppingsState: (toppings) => {
        dispatch(addToppings(toppings));
    }
});

export default connect(null, mapDispatchToProps)(Pizza);
