import React from 'react';
import './Profile.css';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  return (
      <div className="main">
          <ProfileInfo />
          <MyPosts />
      </div>
  )
}

export default Profile;
