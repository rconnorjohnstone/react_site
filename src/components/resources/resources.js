import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import NavBar from '../navbar/navbar.js';

import './resources.css';
import resume from '../../content/resume.pdf';
import low_thrust from '../../content/low_thrust.pdf';
import plasma from '../../content/videos/plasma.mp4';
import cylindrical_plasma from '../../content/videos/cylindrical_plasma.mp4';
import helical_plasma from '../../content/videos/helical_plasma.mp4';
import cad1 from '../../img/cad1.png';
import cad2 from '../../img/cad2.png';

//<video controls src={plasma}> Your browser does not support this video... Sorry </video>
//<video controls src={cylindrical_plasma}> Your browser does not support this video... Sorry </video>
//<video controls src={helical_plasma}> Your browser does not support this video... Sorry </video>


class Resources extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="resources">
          <h2> Resume </h2>
          <p> Click <a className="resume_link" href={resume}> here </a> for the most up to date version of my resume </p>
          <h2> Videos </h2>
          <p> Here are a few videos I have of the research project I did on plasma dynamics as an exploration into electric spacecraft propulsion. In each of these videos we generated a plasma using what's called a Paaschen Discharge using a variety of different shaped electrodes. If you're interested in learning more, feel free to send me a message! </p>
          <div className="video_thingy">
            <video id="plasma" controls src={plasma}> Your browser does not support this video... Sorry </video>
            <video id="cylindrical" controls src={cylindrical_plasma}> Your browser does not support this video... Sorry </video>
            <video id="helical" controls src={helical_plasma}> Your browser does not support this video... Sorry </video>
          </div>
          <h2> Papers </h2>
          <p> While in school, Ive written papers that I'm quite proud of. These aren't published anywhere but here, but I find the topics very interesting, nonetheless. Here I've posted my favorite one. Feel free to take a look. </p>
          <strong><u>
            <a href={low_thrust}> Orbit Raising Utilizing a Hybrid Low/High-Thrust Bi-Elliptic Transfer Orbit for Generic High-Ratio Circular Orbits </a>
          </u></strong>
          <h2> CAD Models </h2>
          <p> Most of what I do nowadays centers more around orbital mechanics than flight structures. But I was previously a mechanical engineer. Here are a couple of renderings of projects I've worked on to highlight some of my CAD abilities. These were built almost entirely by me using AutoCAD, though I'm also familiar with Creo, SolidWorks, and CATIA v5. </p>
          <div className="cad_drawings">
            <img src={cad1} />
            <img src={cad2} />
          </div>
        </div>
      </div>
    )};
}


export default Resources;
