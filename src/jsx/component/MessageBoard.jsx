import React from 'react';
import PropTypes from 'prop-types';

class MessageBoard extends React.Component {

    render() {
        return (
            <div className="msgBoard">
                <p className="msgTitle">Left a message...</p>
                <input className="msgInput" />
                <div className="msgBtn" onClick={this.props.sendMessage}>SEND</div>
            </div>
        );
    }
}

export default MessageBoard;
