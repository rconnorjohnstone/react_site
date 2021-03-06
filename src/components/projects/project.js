import React from 'react';
import images from '../../img/import_images.js';

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project_image">
          <a href={this.props.content.url}>
            <img src={images[this.props.content.image_key]} />
          </a>
        </div>
        <div className="project_title">
          <a href={this.props.content.url}>
            <p>{this.props.content.title}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
