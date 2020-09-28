import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"/>
            </div>
            <div> ava + opisanie</div>
            <div> my post
                <div>
                    You post
                </div>
            </div>
            <div className={s.item}> post 1</div>
            <div>post 2</div>
        </div>
    )
}
export default Profile;