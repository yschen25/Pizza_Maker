import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import getNewList from "../../constant/data";

class ConnectTopping extends React.Component {
    constructor(props) {
        super(props);
        this.toppingHtml = this.toppingHtml.bind(this);
    }

    toppingHtml() {
        return this.props.selectedToppings.map((val) => {

            const arr = val.split('/');

            const html = [];
            for (let i = 1; i <= arr[1]; i++) {
                html.push(<div key={i} className={`${arr[0]}-list ${arr[0]}-${i}`}></div>);
            }
            return html;
        });
    }

    render() {
        return (
            <div>{this.toppingHtml()}</div>
        );
    }
}

// ConnectTopping.defaultProps = {
//     selectedToppings: '',
// };
//
// ConnectTopping.propTypes = {
//     selectedToppings: PropTypes.instanceOf(Array)
// };

const mapStateToProps = async () => {
    const state = await getNewList();
    console.log('state.selectedToppings', state.selectedToppings);
    return {selectedToppings: state.selectedToppings}

    // return {selectedToppings: state.selectedToppings}
};

const Topping = connect(mapStateToProps)(ConnectTopping);

export default Topping;
