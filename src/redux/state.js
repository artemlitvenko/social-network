import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, message: "Post 1", likesCount: 10},
                {id: 1, message: "Post 2", likesCount: 8},
                {id: 2, message: "Post 3", likesCount: 2},
                {id: 3, message: "Post 4", likesCount: 15},
                {id: 4, message: "Post 5", likesCount: 18},
            ],
            newPostText: 'uptarget.com.ua'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Cool')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;