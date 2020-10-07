import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost = {store.addPost.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)}
                     addMessage = {store.addMessage.bind(store)} updateNewMessageText = {store.updateNewMessageText.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}



store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

serviceWorker.unregister();
