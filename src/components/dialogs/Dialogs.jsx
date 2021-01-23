import React from 'react';
import './Dialogs.css';
import DialogsItem from "./dialogsItem/DialogsItem";
import MessagesItem from "./message/MessagesItem";


const Dialogs = (props) => {
    const dialogsData = [
        {id: 0, name: "Roman"},
        {id: 1, name: "Alex"},
        {id: 2, name: "Sara"},
        {id: 3, name: "Matt"},
        {id: 4, name: "Ithan"}
    ];

    const dialogsElements = dialogsData.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} /> );


    const messagesData = [
        {id: 0, message: "Message 1"},
        {id: 1, message: "Message 2"},
        {id: 2, message: "Message 3"},
        {id: 3, message: "Message 4"},
        {id: 4, message: "Message 5"},
    ];

    const messagesElements = messagesData.map( message => <MessagesItem message={message.message} /> );

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
