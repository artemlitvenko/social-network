import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="sidebar">
            <ul>
                <a href="#"><li>Profile</li></a>
                <a href="#"><li>Messages</li></a>
                <a href="#"><li>News</li></a>
                <a href="#"><li>Music</li></a>
                <a href="#"><li>Settings</li></a>
            </ul>
        </div>
    )
}

export default Navbar;
