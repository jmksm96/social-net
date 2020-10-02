import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
};


const Dialogs = (props) => {

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

    let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map( m => <Message message={m.message}/> );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;