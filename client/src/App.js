import React from 'react';
import Header from './header.js';
import Buy from './buy.js';
import Image from './joni-backgroud-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Image} alt="doggie"/>
      <Header/>
      <Buy/>
    </div>
  ); 
}

export default App;


 
