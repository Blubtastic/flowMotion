import React, { Component } from 'react';
import {Route, Link, HashRouter} from 'react-router-dom';
import './App.css';

import Home from './components/Home';

//Router for the nav, with a burger menu for mobile devices.
class App extends Component {
  render() {
    return (
      <HashRouter hashType="noslash">
        <div>
          <div className="nav-container">

            <div id="hamburger" className="active">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="menu">
              <nav>
                <div className="logo">
                  <Link to="/"><img src="" alt="logo"/> </Link>
                </div>

                <ul>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/todo">SUPPORT</Link></li>
                  <li><Link to="/notes">COMMUNITY</Link></li>
                </ul>
              </nav>
            </div>

          </div>

          <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
