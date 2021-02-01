import React from 'react';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let rerenderEntireTree = (state) => {
    ReactDOM.render( <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />, document.getElementById('root'));
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
