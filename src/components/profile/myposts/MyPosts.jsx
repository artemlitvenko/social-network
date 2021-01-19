import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = () => {
  return (
      <div className="myPosts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea></textarea>
              <button>Add post</button>
          </div>
          <Post />
          <Post />
          <Post />
      </div>
  )
}

export default MyPosts;
