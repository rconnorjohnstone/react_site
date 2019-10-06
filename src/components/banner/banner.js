import React from 'react';
import { NavLink } from 'react-router-dom';

import './banner.css'

import main_image from '../../img/stars1.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="content">
          <h1> Richard Connor Johnstone </h1>
          <p> Aerospace Engineer, Software Developer, Private Pilot </p>
          <div className="banner_links">
            <NavLink type="button" className="round_button" to="/about"> About Me </NavLink>
            <NavLink type="button" className="round_button" to="/resources"> Resources </NavLink>
            <NavLink type="button" className="round_button" to="/"> Blog </NavLink>
            <NavLink type="button" className="round_button" to="/projects"> Projects </NavLink>
          </div>
        </div>
        <div className="main_image">
          <img src={main_image} />
        </div>
      </div>
    );
  }
}

export default Banner
