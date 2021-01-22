import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = () => {
  return (
      <div className="posts">
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
