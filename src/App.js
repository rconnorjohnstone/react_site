import React from 'react';
import './App.css';
import Banner from './components/banner/banner.js';
import PreviewCard from './components/preview_card/preview_card.js'; 
import about_me_content from './content/about_me/about_me.js';
import recent_post_content from './content/recent_post/recent_post.js';
import resources_content from './content/resources/resources.js';

function App() {
  return (
    <div className="App">

      <Banner />

      <PreviewCard content={about_me_content} />

      <PreviewCard content={recent_post_content} />

      <PreviewCard content={resources_content} />

    </div>
  );
}

export default App;
