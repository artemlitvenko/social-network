import React from 'react';
import './Dialogs.css';
import DialogsItem from "./dialogsItem/DialogsItem";
import MessagesItem from "./message/MessagesItem";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.state.messagesData.map( message => <MessagesItem message={message.message} /> );

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
