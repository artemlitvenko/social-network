import React from 'react';
import './Profile.css';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

  return (
      <div className="main">
          <ProfileInfo />
          <MyPosts posts={props.posts} />
      </div>
  )
}

export default Profile;
