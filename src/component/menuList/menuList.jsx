import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseToppings } from '../../action';
import { changeToppingItemStatus } from '../../action/changeToppingItemStatus';
import { removeToppings } from '../../action/removeToppings';

class MenuList extends React.Component {
    // Choose toppings
    chooseToppings(name, isChecked) {
        const { dispatchChooseToppings, dispatchRemoveToppings, dispatchChangeToppingItemStatus } = this.props;

        if (isChecked) {
            // Remove
            dispatchRemoveToppings(name);
        } else {
            // Choose
            dispatchChooseToppings(name);
        }

        // Change status
        dispatchChangeToppingItemStatus({
            name,
            isCheck: isChecked
        });
    }

    render() {
        const { toppings } = this.props;

        return Object.entries(toppings)
            .map((val) => (
                <div
                    key={val[0]}
                    className="item"
                    onClick={() => this.chooseToppings(val[0], val[1].isCheck === 'check')}
                >
                    <div className={`${val[0]} img`} />
                    <div className="text">
                        {
                            val[0].charAt(0)
                                .toUpperCase() + val[0].slice(1)
                        }
                    </div>
                    {
                        (val[1].isCheck) === 'check' ? <div className="check isChecked" />
                            : <div className="check" />
                    }
                </div>
            ));
    }
}

//
MenuList.defaultProps = {
    toppings: {}
};

MenuList.propTypes = {
    toppings: PropTypes.shape({
        number: PropTypes.number,
        isCheck: PropTypes.string
    }),
    dispatchChooseToppings: PropTypes.func.isRequired,
    dispatchRemoveToppings: PropTypes.func.isRequired,
    dispatchChangeToppingItemStatus: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    toppings: state.pizza.toppings
});

const mapDispatchToProps = (dispatch) => ({
    dispatchChooseToppings: (name) => {
        dispatch(chooseToppings(name));
    },
    dispatchRemoveToppings: (name) => {
        dispatch(removeToppings(name));
    },
    dispatchChangeToppingItemStatus: (selected) => {
        dispatch(changeToppingItemStatus(selected));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
