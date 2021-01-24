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
                <Route path='/profile' render={ () => <Profile posts={props.posts} /> } />
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> } />

            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
