import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faTasks} className="navbar-icon" />
        <span className="navbar-text">TaskMate</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Welcome</Link>
        <Link to="/home">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
