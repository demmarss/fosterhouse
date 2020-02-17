import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../src/components/header'
import Home from './components/home';
import Footer from './components/footer';
import ContactUs from './components/contactUs';
import Facilities from './components/facilities';
import Staff from './components/staff';

function App() {
  return (
    <Router >
      <Header/>
      <Switch >
        <Route exact path="/"> <Home /> </Route>
        <Route  exact path="/staff"> <Staff /> </Route>
        <Route exact path="/facilities"> <Facilities /> </Route>
        <Route exact path="/contactUs"> <ContactUs /> </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
