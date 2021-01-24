import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";

const App = (props) => {

    return (
      <BrowserRouter>
        <div className="container">
            <Header/>
            <div className="wrapper">
                <Navbar/>
                <Route path='/profile' render={ () => <Profile posts={props.appState.posts} /> } />
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages} /> } />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
