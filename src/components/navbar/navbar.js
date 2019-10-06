import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import './navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navBar">
          <div className="navLinks">
            <NavLink exact className="navBarLink" activeClassName="activeNav" to="/">
              Home
            </NavLink>
            <NavLink className="navBarLink" activeClassName="activeNav" to="/about">
              About
            </NavLink>
            <NavLink className="navBarLink" activeClassName="activeNav" to="/resources">
              Resources
            </NavLink>
            <NavLink className="navBarLink" activeClassName="activeNav" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="logo">
            Richard <strong>Connor</strong> Johnstone
          </div>
        </div>
        <div className="empty">
        </div>
      </div>
    )};
}


export default NavBar;
