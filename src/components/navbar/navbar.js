import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <div className="navLinks">
            <div exact className="navBarLink mobile_menu" activeClassName="activeNav">
              <button onClick={() => this.toggleMenu()}><i className="fa fa-bars"></i></button>
              {this.state.isOpen && <div className="open_menu">
                <NavLink exact className="navBarLink mobileNav" activeClassName="activeNav" to="/">
                  Home
                </NavLink>
                <NavLink className="navBarLink mobileNav" activeClassName="activeNav" to="/about">
                  About
                </NavLink>
                <NavLink className="navBarLink mobileNav" activeClassName="activeNav" to="/resources">
                  Resources
                </NavLink>
                <NavLink className="navBarLink mobileNav" activeClassName="activeNav" to="/contact">
                  Contact
                </NavLink>
              </div>}
            </div>
            <NavLink exact className="navBarLink regularNav" activeClassName="activeNav" to="/">
              Home
            </NavLink>
            <NavLink className="navBarLink regularNav" activeClassName="activeNav" to="/about">
              About
            </NavLink>
            <NavLink className="navBarLink regularNav" activeClassName="activeNav" to="/resources">
              Resources
            </NavLink>
            <NavLink className="navBarLink regularNav" activeClassName="activeNav" to="/contact">
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
