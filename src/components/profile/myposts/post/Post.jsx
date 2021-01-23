import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
      <div className="post">
          <div className="post-item">
              <div className="post-container">
                  <div className="post-avatar">
                      <img alt="ava" src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
                  </div>
                  <div className="post-content">
                      <p>{props.message}</p>
                  </div>
              </div>
              <span className="post-like">{props.likesCount}</span>
          </div>
      </div>
  )
}

export default Post;
