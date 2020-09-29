import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"/>
            </div>
            <div> ava + description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile;