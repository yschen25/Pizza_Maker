import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/MenuList.jsx';
import Topping from './component/Topping.jsx';

class Pizza extends React.Component {
    constructor(props){
        super(props);
        this.choose = this.choose.bind(this);
    }

    choose(e){
        console.log(e.target);
    }

    render() {
        return <div>
            <h1>Pizza Maker</h1>
            <div className="pizzaWrapper">
                <div className="pizza">
                    <Topping />
                </div>
            </div>
            <div className="menu">
                <MenuList choose={this.choose}/>
            </div>
        </div>
    }
}

ReactDOM.render(<Pizza />, document.getElementById('app'));
