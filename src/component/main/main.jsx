import React from 'react';
import MenuList from '../menuList/menuList';
import Topping from '../topping/topping';
import getNewList from "../../constant/data";

class Pizza extends React.Component {

    componentDidMount(){
        getNewList();
    }

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