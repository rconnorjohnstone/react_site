import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/home.js';
import Footer from './components/footer/footer.js';
import About from './components/about/about.js';
import Resources from './components/resources/resources.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact={true} path="/" component={Home} />

        <Route path="/about" component={About} />

        <Route path="/resources" component={Resources} />
    
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
