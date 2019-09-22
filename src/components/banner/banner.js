import React from 'react';

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
            <a href="#"> About Me </a>
            <a href="#"> Resources </a>
            <a href="#"> Blog </a>
            <a href="#"> Projects </a>
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
