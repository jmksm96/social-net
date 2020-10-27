import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.DescriptionBlock}>
                <img src={profile.photos.large}/>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
