import React from 'react';
import './MessagesItem.css';

const MessagesItem = (props) => {
    return (
        <div className="dialogs-messages-item">
            { props.message }
        </div>
    );
};

export default MessagesItem;
