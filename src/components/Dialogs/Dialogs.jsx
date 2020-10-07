import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let newElement = React.createRef();
    let newMessage = () => {
        props.addMessage();
    }

    let onChange = () => {
        let text = newElement.current.value;
        props.updateNewMessageText(text);
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <button onClick={newMessage}>Добавить</button>
            </div>
            <div>
                <textarea ref={newElement} onChange={onChange}
                value = {props.newMessageText}/>
            </div>
        </div>
    )
}

export default Dialogs;