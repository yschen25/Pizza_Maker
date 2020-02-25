import React from 'react';
import toppingsList from '../data/Data.jsx'

class MenuList extends React.Component {

    render() {
        return Object.entries(toppingsList.toppings).map((val) => {
            return (
                <div key={val[0]} id={val[0]} data-number={val[1]} className="item"
                     onClick={this.props.chooseToppings}>
                    <div className={`${val[0]} img`}></div>
                    <div className="text">{val[0].charAt(0).toUpperCase() + val[0].slice(1)}</div>
                </div>
            )
        });
    }
}

export default MenuList;
