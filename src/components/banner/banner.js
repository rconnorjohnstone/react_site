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
            <button type="button" className="round_button"> About Me </button>
            <button type="button" className="round_button"> Resources </button>
            <button type="button" className="round_button"> Blog </button>
            <button type="button" className="round_button"> Projects </button>
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
