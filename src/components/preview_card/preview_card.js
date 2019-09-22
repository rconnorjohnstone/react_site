import React from 'react';
import './preview_card.css';

class PreviewCard extends React.Component {
  render() {
    return (
      <div className="preview card">

        <div className="card_image">
          <img src={require(this.props.content.image_loc)} />
        </div>

        <div className="content">
          <h2> {this.props.content.title} </h2>
          <p> {this.props.content.text} </p>
          <div className="card_links">
            <a href="#"> Learn More </a>
          </div>
        </div>

      </div>
    );
  }
}

export default PreviewCard;
