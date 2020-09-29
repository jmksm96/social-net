import React from "react";
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div>
            {props.message}
            {props.message}
            <div className={s.item}>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"/>
                post 1
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Posts;