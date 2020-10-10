import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";



const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElem = React.createRef();

    let onAddPost = () => {
       props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div>
                <textarea ref={newPostElem}
                    onChange={onPostChange}
                    value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Добавить пост</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;


