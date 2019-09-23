import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_wrapper">

        <div className="footer_links">

          <a href="https://www.github.com/rconnorjohnstone" ><p><i className="fa fa-github"></i></p></a>
          <a href="https://www.instagram.com/r_connor_johnstone/" ><p><i className="fa fa-instagram"></i></p></a>
          <a href="https://www.linkedin.com/in/rconnorjohnstone/" ><p><i className="fa fa-linkedin"></i></p></a>
          <a href="mailto:connor@richardconnorjohnstone.com" ><p><i className="fa fa-envelope-open"></i></p></a>

        </div>

        <p> &copy; Richard Connor Johnstone </p>

      </div>
    );
  }
}

export default Footer;
