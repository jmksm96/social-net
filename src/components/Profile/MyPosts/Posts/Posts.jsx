import React from "react";
import s from './MyPosts.module.css'
const MyPosts = () => {
  return(
      <div>
          <div>my post</div>
          <div>You post </div>
          <div className={s.item}> post 1</div>
          <div className={s.item}>post 2</div>
      </div>

  )
}

export default MyPosts;