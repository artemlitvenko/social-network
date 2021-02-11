import React from 'react';
import './Dialogs.css';
import DialogsItem from "./dialogsItem/DialogsItem";
import MessagesItem from "./message/MessagesItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogsData.map( dialog => <DialogsItem name={ dialog.name } id={ dialog.id } /> );
    let messagesElements = state.messagesData.map( message => <MessagesItem message={ message.message } /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className="dialogs">
            <div className="dialogs-users">
                { dialogsElements }
            </div>
            <div className="dialogs-messages">
                <div>{ messagesElements }</div>
                <div className="form-messages">
                    <div> <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Add your message' ></textarea> </div>
                    <div><button onClick={onSendMessageClick} >Send message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
