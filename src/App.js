import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="container">
        <Header/>
        <div className="wrapper">
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}

export default App;
