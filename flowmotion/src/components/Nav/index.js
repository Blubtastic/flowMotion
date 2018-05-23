import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import flowmotion from '../../images/flowmotion.svg';
import flowmotionSmall from '../../images/flowmotion.svg';
import './nav.css'

export default class Slideshow extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkboxState: false,
    }
    //Bind the function to this class here instead of everywhere it's called
    this.checked = this.checked.bind(this);
  }

  render(){
    return(
      <div className="nav-container">
        <nav id="hamburger" className="mobile active column">
          <div className="burgerLogo row">
            <div>
              <input type="checkbox" onClick={this.checked} />
              <span></span>
              <span></span>
            </div>
            <Link to="/"><img src={flowmotionSmall} alt="logo"/> </Link>
          </div>

          <div className={"toggleBar column show" + this.state.checkboxState + " textAlign"}>
            <ul>
              <li><Link onClick={this.checked} to="/">HOME</Link></li>
              <li><Link onClick={this.checked} to="/jobs">SUPPORT</Link></li>
              <li><Link onClick={this.checked} to="/notes">COMMUNITY</Link></li>
            </ul>
          </div>
        </nav>



        <div className="menu desktop">
          <nav>
            <div className="logo">
              <Link to="/"> <img src={flowmotionSmall} alt="logo"/> </Link>
            </div>

            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/jobs">SUPPORT</Link></li>
              <li><Link to="/notes">COMMUNITY</Link></li>
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

}
