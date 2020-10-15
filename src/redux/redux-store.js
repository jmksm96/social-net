import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer,
        usersPage: userReducer,
        auth: authReducer
    })
let store = createStore(reducers)
window.store = store;

export default store;
