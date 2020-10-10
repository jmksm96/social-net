import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}/>
            <React.StrictMode>
                <Provider store = {store}>
                {/*<App state={state} dispatch = {store.dispatch.bind(store)} store = {store}/>*/}
                <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}




rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
