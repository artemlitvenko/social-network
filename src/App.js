import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import {addPost} from "./redux/state";

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="container">
            <Header/>
            <div className="wrapper">
                <Navbar/>
                <Route path='/profile' render={ () => <Profile posts={props.appState.postData} addPost={props.addPost} /> } />
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.appState.dialogsData} messages={props.appState.messagesData} /> } />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
