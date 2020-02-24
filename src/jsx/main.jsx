import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './component/MenuList.jsx';
import Topping from './component/Topping.jsx';
import menuList from './data/Data.jsx';

class Pizza extends React.Component {
    constructor(props){
        super(props);
        this.choose = this.choose.bind(this);
        this.state = menuList;
    }

    choose(e){
        let text = e.target.getAttribute('data-name');
        // this.state[parseInt(e.target.id)-1] =  {'key': parseInt(e.target.id),'text': text, 'number': 12,'isCheck': true};
        this.setState({'key': parseInt(e.target.id),'text': text, 'number': 12,'isCheck': true});
        console.log(this.state);
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
