import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLength2, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}
                   validate = {[required, maxLength10, minLength2]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let AddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>my post</h3>
                <AddNewPostFormRedux onSubmit={AddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;


