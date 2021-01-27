import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

    let addPost = () => {
        alert('Hello 3');
    }

    return (
        <div className="posts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea></textarea>
              <button onClick={ addPost } >Add new post</button>
          </div>
            { postElements }
        </div>
    )
}

export default MyPosts;
