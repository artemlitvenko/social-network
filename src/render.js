import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render( <App appState={state} addPost={addPost} />, document.getElementById('root'));
}

reportWebVitals();
