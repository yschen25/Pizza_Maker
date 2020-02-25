import React from 'react';

class Topping extends React.Component {

    render() {

        let list = this.props.toppingsList.map((val) => {

            let arr = val.split('/');

            let html = [];
            for (let i = 1; i <= arr[1]; i++) {
                html.push(<div key={i} className={`${arr[0]}-list ${arr[0]}-${i}`}></div>);
            }
            return html;
        });

        return (
            <div>{list}</div>
        )
    }
}

export default Topping;
