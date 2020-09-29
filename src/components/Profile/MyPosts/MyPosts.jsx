import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (

        <div>
            <div>my post</div>
            <textarea></textarea>
            <button>Добавить пост</button>
            <Posts message="It's my first post"/>
            <Posts message="Hello wolrd"/>
        </div>

    )
}

export default MyPosts;