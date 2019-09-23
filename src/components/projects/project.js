import React from 'react';
import images from '../../img/import_images.js';

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="project_image">
          <img src={images[this.props.content.image_key]} />
        </div>
        <div className="project_title">
          <p>{this.props.content.title}</p>
        </div>
      </div>
    );
  }
}

export default Project;
