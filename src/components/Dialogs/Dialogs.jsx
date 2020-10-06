import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let newElement = React.createRef();
    let addElement = () => {
        let text = newElement.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <button onClick={addElement}>Добавить</button>
            </div>
            <div>
                <textarea ref={newElement}></textarea>
            </div>
        </div>
    )
}

export default Dialogs;