import React from 'react';
import '../Post.css';

const Post = () => {
  return (
      <div className="main">
        <div className="main-header"></div>
        <div className="profile-block">
          <div className="avatar">
            <img src='https://64.media.tumblr.com/f2101850c6c13c657e0f3fb198ad2a7e/tumblr_oednj7uxsV1rub9fao4_1280.jpg' />
          </div>
          <div className="description">
            <h2>Artem L.</h2>
            <div className="my-data">
              <div>Date of Birthday: 9.08</div>
              <div>City: Dnipro</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Post;
