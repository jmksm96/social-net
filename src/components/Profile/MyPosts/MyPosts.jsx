import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElem = React.createRef();
    let newPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onChange = () => {
        let text = newPostElem.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
            </div>

            <div>
                <textarea
                    ref={newPostElem} onChange={onChange}
                    value={props.newPostText}/>
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

