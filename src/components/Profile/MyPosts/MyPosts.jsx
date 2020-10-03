import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;

