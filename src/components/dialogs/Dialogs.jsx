import React from 'react';
import './Dialogs.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className="dialogs-users-item">
            <NavLink to={ "/dialogs/" + props.id }>{ props.name }</NavLink>
        </div>
    );
};

const MessagesItem = (props) => {
    return (
        <div className="dialogs-messages-item">
            { props.message }
        </div>
    );
};


const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs-users">
                <DialogsItem name="Roman" id="1" />
                <DialogsItem name="Alex" id="2" />
                <DialogsItem name="Sara" id="3" />
                <DialogsItem name="Matt" id="4" />
                <DialogsItem name="Ithan" id="5" />
            </div>
            <div className="dialogs-messages">
                <MessagesItem message="Message 1" />
                <MessagesItem message="Message 2" />
                <MessagesItem message="Message 3" />
                <MessagesItem message="Message 4" />
            </div>
        </div>
    )
}

export default Dialogs;
