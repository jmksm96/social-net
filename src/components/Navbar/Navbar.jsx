import React from 'react';
import classes from './Navbar.module.css'
import s from "./Profile.module.css";


let c2 = 'active';
let classNew = `${s.item} ${c2}`


const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
        </nav>
    )
}
export default Navbar;