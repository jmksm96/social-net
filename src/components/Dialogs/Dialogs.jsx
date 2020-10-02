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
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <DialogItem id='1' name='Max'/>
                <DialogItem id='2' name='Mark'/>
                <DialogItem id='3' name='Danila'/>
                <DialogItem id='4' name='Karina'/>
                <DialogItem id='5' name='Dima'/>
                <DialogItem id='6' name='Edward'/>

            </div>
            <div className={s.messages}>
                <Message message = "Hi" />
                <Message message = "Your project?" />
                <Message message = "Yeah" />
                <Message message = "Cool, man" />
            </div>
        </div>
    )
}

export default Dialogs;