import React from 'react';
import './projects.css';
import Project from './project.js';

import imd_content from '../../content/projects/imd.js';
import att_content from '../../content/projects/attitude.js';
import wms_content from '../../content/projects/wms.js';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects_wrapper">

        <div className="projects_header">
          <h2> Software Projects </h2>
          <p> The links below outline a few of my recent projects </p>
        </div>

        <div className="projects_grid">
          <Project content={imd_content} />
          <Project content={att_content} />
          <Project content={wms_content} />
        </div>

      </div>
    );
  }
}

export default Projects;
