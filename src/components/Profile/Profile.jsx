import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
    <div className={s.coverup}>
      <img src='https://printwalls.ru/assets/images/products/2187/fotooboi-priroda-lesa-kupit-0027.jpg' ></img>
    
    <div className={s.ava}>
      </div>
    </div>
    <MyPosts />
  </div>
}
export default Profile;