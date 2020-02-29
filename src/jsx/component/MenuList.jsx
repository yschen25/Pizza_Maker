import React from 'react';
import toppingsList from '../data/Data.jsx'

class MenuList extends React.Component {

    render() {
        return Object.entries(this.props.toppings).map((val) => {
            return (
                <div key={val[0]} id={val[0]} data-number={val[1].number} data-check={val[1].isCheck} className="item"
                     onClick={this.props.chooseToppings}>
                    <div className={`${val[0]} img`}></div>
                    <div className="text">{val[0].charAt(0).toUpperCase() + val[0].slice(1)}</div>
                    {(val[1].isCheck) === 'check' ? <div className="check isChecked"></div> : <div className="check"></div>}
                </div>
            )
        });
    }
}

export default MenuList;
