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
    let dialogsData = [
        {id: 1, name: "Max"},
        {id: 2, name: "Karina"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Dimon"},
        {id: 5, name: "Danila"},
        {id: 6, name: "Edik"},

    ]

    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Your project?"},
        {id: 3, message: "Yeah"},
        {id: 4, message: "Cool, man"},

    ]

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogs;