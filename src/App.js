import React from 'react'
import './App.css';
import Title from './Title.js'
import GlobalTracker from './GlobalTracker.js'
import Footer from './Footer.js'
import background from './images/background.jpg'

function App() {
  return (
    <div>
      <img className = "bg" src = {background} />
      <Title />
      <GlobalTracker />
      <Footer />
    </div>
  );
}

export default App;
