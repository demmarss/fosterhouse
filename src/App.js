import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header'
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
