import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

import Nav from './components/Nav'

import Home from './components/Home';

import vpSupplyChain from './components/Jobs/VPSupplyChain';
import vpCustomerRelations from './components/Jobs/VPCustomerRelations';
import leadMechanicalEngineer from './components/Jobs/LeadMechanicalEngineer';
import customerConsultant from './components/Jobs/CustomerConsultant';
import androidDeveloper from './components/Jobs/AndroidDeveloper';

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
            <Route path="/vpSupplyChain" component={vpSupplyChain} />
            <Route path="/vpCustomerRelations" component={vpCustomerRelations} />
            <Route path="/leadMechanicalEngineer" component={leadMechanicalEngineer} />
            <Route path="/customerConsultant" component={customerConsultant} />
            <Route path="/androidDeveloper" component={androidDeveloper} />

            <Footer/>
          </div>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
