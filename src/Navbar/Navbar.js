// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Assuming you'll add some styles

import youthCaresLogo from './../assets/youthcaresLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className='logo'>Youth Cares</h1>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
