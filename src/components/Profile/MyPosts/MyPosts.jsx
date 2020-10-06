import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElem = React.createRef();
    let newPost = () => {
        let text = newPostElem.current.value;
        props.addPost(text);
    }



    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div>
                <textarea ref={newPostElem}></textarea>
            </div>
            <div>
                <button onClick={newPost}>Добавить пост</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;

