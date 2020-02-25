import React from 'react';
import toppingsList from '../data/Data.jsx'

class MenuList extends React.Component{

    render(){
        return toppingsList.toppings.map((val) => {
            return (
                <div key={val.key} id={val.key} data-name={val.text} data-number={val.number} data-show={val.isShow} className="item" onClick={this.props.chooseToppings}>
                    <div className={`${val.text} img`}></div>
                    <div className="text">{val.text.charAt(0).toUpperCase() + val.text.slice(1)}</div>
                </div>
            )
        });
    }
}

export default MenuList;
