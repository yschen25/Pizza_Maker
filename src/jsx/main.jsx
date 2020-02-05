import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render() {
        return <div>
            <h1>TEST</h1>
            <div class="test"></div>
        </div>
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));
