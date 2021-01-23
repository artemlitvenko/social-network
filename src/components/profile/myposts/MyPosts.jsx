import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = () => {
    const postData = [
        {id: 0, message: "Post 1", likesCount: 10},
        {id: 1, message: "Post 2", likesCount: 8},
        {id: 2, message: "Post 3", likesCount: 2},
        {id: 3, message: "Post 4", likesCount: 15},
        {id: 4, message: "Post 5", likesCount: 18},
    ];

    const postElements = postData.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

    return (
        <div className="posts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea></textarea>
              <button>Add post</button>
          </div>
            { postElements }
        </div>
    )
}

export default MyPosts;
