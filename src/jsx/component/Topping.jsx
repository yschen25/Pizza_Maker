import React from 'react';
import menuList from '../data/Data.jsx'

class Topping extends React.Component {

    render() {

        let list =  menuList.map((val) => {

            let html = [];
            for (let i = 1; i <= val.number; i++) {
                 html.push(<div key={i} className={`${val.text}-list ${val.text}-${i}`}></div>)
            }

            console.log(html);
            return html;
        });

        return(
            <div>{list}</div>
        )
    }
}

export default Topping;
