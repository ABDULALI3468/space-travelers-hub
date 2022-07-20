import React from 'react';
import { NavLink } from 'react-router-dom';
import planetIcon from '../icons/planetIcon.png';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <img src={planetIcon} className="planetIcon" alt="" />
      <h1 className="header-heading">Space Travellers Hub</h1>
    </div>
    <div className="navbar-links">
      <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">
        Rockets
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="Missions">
        Missions
      </NavLink>
      <span className="line" />
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="My-Profile">
        My Profile
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
