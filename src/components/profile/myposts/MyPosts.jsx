import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className="posts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea ref={ newPostElement } ></textarea>
              <button onClick={ addPost } >Add new post</button>
          </div>
            { postElements }
        </div>
    )
}

export default MyPosts;
