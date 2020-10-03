import React from "react";
import s from './Posts.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.postMessage}>
                {props.message}
            </div>
            <div>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"/>
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post;