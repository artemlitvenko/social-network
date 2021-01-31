import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render( <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
