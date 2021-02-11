const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 0, name: "Roman"},
        {id: 1, name: "Alex"},
        {id: 2, name: "Sara"},
        {id: 3, name: "Matt"},
        {id: 4, name: "Ithan"},
        {id: 5, name: "Bill"},
    ],
    messagesData: [
        {id: 0, message: "Message 1"},
        {id: 1, message: "Message 2"},
        {id: 2, message: "Message 3"},
        {id: 3, message: "Message 4"},
        {id: 4, message: "Message 5"},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default dialogsReducer;