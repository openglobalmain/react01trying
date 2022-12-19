import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.Posts}>
      My posts:
      <div><Post message="How are u?"/></div>
      <div><Post message="I'm  fine, thx, wbu?"/></div>
      <div><Post /></div>
      <div><Post /></div>
      <div><Post /></div>
    </div>
}
export default MyPosts;