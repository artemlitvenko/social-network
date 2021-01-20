import React from 'react';
import './Post.css';

const Post = () => {
  return (
      <div className="post">
          <div className="post-item">
              <div className="post-container">
                  <div className="post-avatar">
                      <img alt="ava" src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
                  </div>
                  <div className="post-content">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
              <span className="post-like">Like</span>
          </div>
      </div>
  )
}

export default Post;
