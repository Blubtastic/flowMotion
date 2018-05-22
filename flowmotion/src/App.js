import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'

import Home from './components/Home';
import Jobs from './components/Jobs';
import Footer from './components/Footer';

//Router for the nav, with a burger menu for mobile devices.
class App extends Component {
  render() {
    return (
      <HashRouter hashType="noslash">
        <div>
          <Nav/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/jobs" component={Jobs}/>
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
