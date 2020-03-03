import React from 'react';
import MenuList from '../menuList/menuList';
import Topping from '../topping/topping';

class Pizza extends React.Component {
    render() {
        return (
            <div>
                <h1>Pizza Maker</h1>
                <div className="pizzaWrapper">
                    <div className="pizza">
                        <Topping/>
                    </div>
                </div>
                <div className="menu">
                    <MenuList/>
                </div>
            </div>
        );
    }
}

export {Pizza};