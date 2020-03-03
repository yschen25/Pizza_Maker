import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {chooseToppings} from '../../action';

class ConnectMenuList extends React.Component {
    render() {
        return Object.entries(this.props.toppings).map((val) => {
            return (
                <div
                    key={val[0]}
                    id={val[0]}
                    data-number={val[1].number}
                    data-check={val[1].isCheck}
                    className="item"
                    onClick={this.props.chooseToppings}>
                    <div className={`${val[0]} img`}></div>
                    <div className="text">{val[0].charAt(0).toUpperCase() + val[0].slice(1)}</div>
                    {(val[1].isCheck) === 'check' ? <div className="check isChecked"></div> : <div className="check"></div>}
                </div>
            );
        });
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

const mapStateToProps = state =>{
    state.then((res)=>{
        return {toppings : res.toppings}
    });
};

const mapDispatchToProps = dispatch => {
    return {
        chooseToppings : val =>{ dispatch(chooseToppings(val)) }
    }
};

const MenuList = connect(mapStateToProps,mapDispatchToProps)(ConnectMenuList);

export default MenuList;