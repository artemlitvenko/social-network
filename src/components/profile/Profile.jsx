import React from 'react';
import './Profile.css';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
      <div className="main">
          <ProfileInfo />
          <MyPosts posts={props.profilePage.postData} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      </div>
  )
}

export default Profile;
