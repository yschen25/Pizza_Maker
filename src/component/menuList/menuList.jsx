import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ADD_TOPPINGS} from '../../constant/actionType';
import {addToppings} from '../../action/addToppings';

class ConnectMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.chooseToppings = this.chooseToppings.bind(this);
    }

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
        this.state.selectedToppings.includes(selectedTopping) ?
            this.setState({selectedToppings: [...this.state.selectedToppings.filter(val => val !== selectedTopping)]}) :
            this.setState({selectedToppings: [...this.state.selectedToppings, selectedTopping]});
    }

    render() {
        if (this.props.toppings === null || this.props.toppings === undefined) {
            return '';
        } else {
            return Object.entries(this.props.toppings).map((val) => {
                return (
                    <div
                        key={val[0]}
                        id={val[0]}
                        data-number={val[1].number}
                        data-check={val[1].isCheck}
                        className="item"
                        onClick={this.chooseToppings}>
                        <div className={`${val[0]} img`}></div>
                        <div className="text">{val[0].charAt(0).toUpperCase() + val[0].slice(1)}</div>
                        {(val[1].isCheck) === 'check' ? <div className="check isChecked"></div> :
                            <div className="check"></div>}
                    </div>
                );
            });
        }
    }
}

//
// ConnectMenuList.defaultProps = {
//     toppings: '',
//     chooseToppings: ''
// };
//
// ConnectMenuList.propTypes = {
//     toppings: PropTypes.instanceOf(Object),
//     chooseToppings: PropTypes.func,
// };

const mapStateToProps = () => {
    console.log('state.toppings', state.toppings);
    return {toppings: state.toppings}
};

const mapDispatchToProps = dispatch => {
    return {
        addToppings: article => dispatch(addToppings(article))
    }
};

const MenuList = connect(mapStateToProps, mapDispatchToProps)(ConnectMenuList);

export default MenuList;