import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import './preview_card.css';
import images from '../../img/import_images.js'

class PreviewCard extends React.Component {
  render() {
    return (
      <div className="preview_card">

        <div className="card_image" style={this.props.content.style}>
          <img src={images[this.props.content.image_key]} />
        </div>

        <div className="content">
          <h2> {this.props.content.title} </h2>
          <p> {this.props.content.text} </p>
          <div className="card_links">
            <NavLink className="round_button" to={this.props.content.spot}>
              Learn More
            </NavLink>
          </div>
        </div>

      </div>
    );
  }
}

export default PreviewCard;
