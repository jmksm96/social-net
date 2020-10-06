import {renderEntireThree} from "../render";

let state = {
    profilePage:{
    posts: [
        {id: 1, message: "It's my first post", likesCount: '12'},
        {id: 2, message: "Hello world", likesCount: '11'}
    ]
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

        ]
    }
}

let addPost = (postMessage) => {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount : 0
        };
    state.profilePage.posts.push(newPost);
    renderEntireThree(state);
}

export {addPost}
export default state;