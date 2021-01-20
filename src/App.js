import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
  return (
      <BrowserRouter>
        <div className="container">
            <Header/>
            <div className="wrapper">
                <Navbar/>
                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
