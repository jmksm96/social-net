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

    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }

}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;