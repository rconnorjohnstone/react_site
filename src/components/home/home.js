import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from '../banner/banner.js';
import PreviewCard from '../preview_card/preview_card.js'; 
import Projects from '../projects/projects.js';
import Contact from '../contact/contact.js';

import about_me_content from '../../content/about_me/about_me.js';
import recent_post_content from '../../content/recent_post/recent_post.js';
import resources_content from '../../content/resources/resources.js';

class Home extends React.Component {
  render() {
    return (
      <div>

        <Banner />

        <PreviewCard content={about_me_content} />

        <PreviewCard content={recent_post_content} />

        <PreviewCard content={resources_content} />

        <Projects />

        <Contact />

      </div>
    )};
}

export default Home;
