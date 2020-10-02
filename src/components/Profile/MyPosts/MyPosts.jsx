import React from "react";
import s from './MyPosts.module.css'
import Posts from "./Posts/Posts";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "It's my first post", likescount: '12'},
        {id: 2, message: "IHello wolrd", likescount: '11'}
    ]

    return (

        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div><textarea></textarea></div>
            <div>
                <button>Добавить пост</button>
            </div>
            <div className={s.posts}>
                <Posts message={postData[0].message} id={postData[0].id} likescount = {postData[0].likescount} />
                <Posts message={postData[1].message} id={postData[1].id} likescount = {postData[0].likescount}/>

            </div>
        </div>

    )
}

export default MyPosts;