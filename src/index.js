import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';

ReactDOM.render( <App appState={state} addPost={addPost} />, document.getElementById('root'));

reportWebVitals();
