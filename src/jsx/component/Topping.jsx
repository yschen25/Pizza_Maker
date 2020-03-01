import React from 'react';
import PropTypes from 'prop-types';

class Topping extends React.Component {
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

Topping.defaultProps = {
    selectedToppings: '',
};

Topping.propTypes = {
    selectedToppings: PropTypes.instanceOf(Array)
};

export default Topping;
