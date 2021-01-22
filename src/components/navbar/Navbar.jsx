import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to="/profile"><li>Profile</li></NavLink>
                <NavLink to="/dialogs"><li>Messages</li></NavLink>
                <a href=""><li>News</li></a>
                <a href=""><li>Music</li></a>
                <a href=""><li>Settings</li></a>
            </ul>
        </div>
    )
}

export default Navbar;