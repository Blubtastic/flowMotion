import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

import Nav from './components/Nav'

import Home from './components/Home';
import Jobs from './components/Jobs';

import Footer from './components/Footer';

//Router for the nav, with a burger menu for mobile devices.
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>

          <div className="pageContainer">
            <Nav/>

            <Route exact path="/" component={Home} />
            <Route path="/jobs" component={Jobs} />

            <Footer/>
          </div>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
