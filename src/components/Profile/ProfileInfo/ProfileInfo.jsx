import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"/>
            </div>
            <div className={s.DescriptionBlock}> ava + description</div>
        </div>
    )
}
export default ProfileInfo;