import React from 'react';
import menuList from '../data/Data.jsx'

class MenuList extends React.Component{

    render(){
        return menuList.map((val) => {
            return (
                <div key={val.key} id={val.key} className="item" onClick={this.props.choose}>
                    <div className={`${val.text} img`}></div>
                    <div className="text">{val.text.charAt(0).toUpperCase() + val.text.slice(1)}</div>
                </div>
            )
        });
    }
}

export default MenuList;
