import React from 'react';

class Topping extends React.Component {

    render() {

        let list = this.props.toppingsList.map((val) => {

            let html = [];
            for (let i = 1; i <= val.number; i++) {
                if(val.isShow === 'show'){
                    html.push(<div key={i} className={`${val.text}-list ${val.text}-${i}`}></div>)
                }
            }

            return html;
        });

        return (
            <div>{list}</div>
        )
    }
}

export default Topping;
