import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Topping extends React.Component {
    render() {

        // Object destructuring
        const { toppings, selectedToppings } = this.props;

        return (
            <div>
                {
                    selectedToppings.map((name) => Array(toppings[name].quantity)
                        .fill(0)
                        .map((value, index) => index + 1)
                        .map((n) => (
                            <div
                                key={`${name}_${n}`}
                                className={`${name}-list ${name}-${n}`}
                            />
                        )))
                }
            </div>
        );
    }
}

Topping.defaultProps = {
    toppings: {},
    selectedToppings: []
};

Topping.propTypes = {
    toppings: PropTypes.shape({
        quantity: PropTypes.number,
        isCheck: PropTypes.string
    }),
    selectedToppings: PropTypes.arrayOf(
        PropTypes.string
    )
};

const mapStateToProps = (state) => ({
    toppings: state.pizza.toppings,
    selectedToppings: state.pizza.selectedToppings
});

export default connect(mapStateToProps)(Topping);
