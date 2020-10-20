import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
debugger
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"/>*/}
            {/*</div>*/}
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
