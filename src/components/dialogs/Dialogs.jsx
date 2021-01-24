import React from 'react';
import './Dialogs.css';
import DialogsItem from "./dialogsItem/DialogsItem";
import MessagesItem from "./message/MessagesItem";


const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} /> );

    const messagesElements = props.messages.map( message => <MessagesItem message={message.message} /> );

    return (
        <div className="dialogs">
            <div className="dialogs-users">
                { dialogsElements }
            </div>
            <div className="dialogs-messages">
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
