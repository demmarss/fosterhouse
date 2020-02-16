import React from 'react';
import './App.css';
import Header from '../src/components/header'
import Home from './components/home';
import Footer from './components/footer';
import FacilitiesSlider from './components/facilities';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <FacilitiesSlider/>
      <Footer/>
      
    </div>
  );
}

export default App;
