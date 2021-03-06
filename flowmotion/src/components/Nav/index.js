import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import flowmotion from '../../images/flowmotion.svg';
import flowmotionFull from '../../images/flowmotionFull.svg';
import './nav.css'

export default class Slideshow extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkboxState: false,
    }
    //Bind the function to this class here instead of everywhere it's called
    this.checked = this.checked.bind(this);
    this.uncheck = this.uncheck.bind(this);
  }

  render(){
    return(
      <div className="nav-container">
        <nav id="hamburger" className="mobile active column">
          <div className="burgerLogo row">
            <div>
              <input ref="navCheck"type="checkbox" state={this.state.checked} onClick={this.checked} />
              <span></span>
              <span></span>
            </div>
            <Link to="/"><img src={flowmotion} alt="logo"/> </Link>
          </div>

          <div className={"toggleBar column show" + this.state.checkboxState + " textAlign"}>
            <ul>
              <li><a onClick={this.uncheck} href="https://flowmotion.co">HOME</a></li>
              <li><a onClick={this.uncheck} href="https://support.flowmotion.co/hc/en-us">SUPPORT</a></li>
            </ul>
          </div>
        </nav>



        <div className="menu desktop">
          <nav>
            <div className="largeLogo">
              <Link to="/"> <img src={flowmotionFull} alt="logo"/> </Link>
            </div>

            <ul>
              <li><a href="https://flowmotion.co">HOME</a></li>
              <li><a href="https://support.flowmotion.co/hc/en-us">SUPPORT</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

  //Checkbox state. Used to update className to toggle navbar.
  checked(event) {
   this.setState({checkboxState: !this.state.checkboxState});
}
  uncheck(event){
    this.refs.navCheck.checked = false;
    this.setState({checkboxState: !this.state.checkboxState});
  }
}
