import {Field, reduxForm} from "redux-form";
import React from "react";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={'textarea'}/>
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}

export default reduxForm({from: 'profile-add-post'})(AddPostForm)