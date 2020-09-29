import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialog} {s.active}`}>
                    <NavLink to="/dialogs/1">Max</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Mark</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Danila</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Karina</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Dima</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Edward</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Your project?</div>
                <div className={s.message}>Yeah</div>
                <div className={s.message}></div>
            </div>
        </div>
    )
}

export default Dialogs;