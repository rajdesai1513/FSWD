import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <button className="toggle-btn" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="menu-items">
                    <li onClick={() => setPage("Home")}> <span>Home</span></li>
                    <li onClick={() => setPage("Profile")}> <span>Profile</span></li>
                    <li onClick={() => setPage("About")}> <span>About</span></li>
                    <li onClick={() => setPage("Contact")}> <span>Contact</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;