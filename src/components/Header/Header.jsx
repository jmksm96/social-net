import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className ={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt=""/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    )
}
export default Header;
