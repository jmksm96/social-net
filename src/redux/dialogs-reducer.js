const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

 const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: newMessage})
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage})

export default dialogsReducer;