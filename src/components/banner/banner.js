import React from 'react';
import ReactDOM from 'react-dom';

import main_image from '../../img/stars1.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="content">
          <h1> Richard Connor Johnstone </h1>
          <h4> Aerospace Engineer, Software Developer, Private Pilot </h4>
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
