import React from 'react';
import './MyPosts.css';
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={ post.message } likesCount={ post.likesCount } /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="posts">
          <h2>My posts</h2>
          <div className="post-form">
              <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
              <button onClick={ addPost } >Add new post</button>
          </div>
            { postElements }
        </div>
    )
}

export default MyPosts;
