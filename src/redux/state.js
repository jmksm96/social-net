let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first post", likesCount: '12'},
                {id: 2, message: "Hello world", likesCount: '11'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Max"},
                {id: 2, name: "Karina"},
                {id: 3, name: "Mark"},
                {id: 4, name: "Dimon"},
                {id: 5, name: "Danila"},
                {id: 6, name: "Edik"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Your project?"},
                {id: 3, message: "Yeah"},
                {id: 4, message: "Cool, man"}

            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }

}


export default store;
window.store = store;




