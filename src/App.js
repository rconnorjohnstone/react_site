import React from 'react';
import './App.css';
import Banner from './components/banner/banner.js';
import PreviewCard from './components/preview_card/preview_card.js'; 

const about_me_content = {
  image_loc: '../../img/moon.jpg',
  title: 'About Me',
  text: "I am an Aerospace Engineering Master's Student at the University of Colorado - Boulder as well as a Systems Engineer at Palski and Associates. Click the link below to learn a little bit more about my story.",
  orientation: 'left'
};

function App() {
  return (
    <div className="App">
      <Banner />
      <PreviewCard content={about_me_content} />
    </div>
  );
}

export default App;
