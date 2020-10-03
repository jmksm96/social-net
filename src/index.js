import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
    {id: 1, message: "It's my first post", likescount: '12'},
    {id: 2, message: "Hello world", likescount: '11'}
]

let dialogs = [
    {id: 1, name: "Max"},
    {id: 2, name: "Karina"},
    {id: 3, name: "Mark"},
    {id: 4, name: "Dimon"},
    {id: 5, name: "Danila"},
    {id: 6, name: "Edik"},

]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Your project?"},
    {id: 3, message: "Yeah"},
    {id: 4, message: "Cool, man"},

]


ReactDOM.render(
    <React.StrictMode>
        <App posts={postData} messages={messages} dialogs={dialogs}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
