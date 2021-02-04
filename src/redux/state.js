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
            ]
        }
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

export default store;