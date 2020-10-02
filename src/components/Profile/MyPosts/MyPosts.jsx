import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (

        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div><textarea></textarea></div>
            <div>
                <button>Добавить пост</button>
            </div>
            <div className={s.posts}><Posts message="It's my first post"/>
                <Posts message="Hello wolrd"/>
            </div>
        </div>

    )
}

export default MyPosts;