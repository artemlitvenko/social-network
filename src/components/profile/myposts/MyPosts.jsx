import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = (props) => {

    const postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

    return (
        <div className="posts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea></textarea>
              <button>Add new post</button>
          </div>
            { postElements }
        </div>
    )
}

export default MyPosts;
