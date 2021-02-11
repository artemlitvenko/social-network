import React from 'react';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
            appState={ state }
            dispatch={ store.dispatch.bind(store) }
            store={ store }
        />,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});




reportWebVitals();
