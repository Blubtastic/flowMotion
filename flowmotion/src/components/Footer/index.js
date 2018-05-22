import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css'
import flowmotion from '../../images/flowmotion.svg';

export default class Footer extends Component {

  render(){
    return(
      <div className="footerContainer">

        <div className="footer row centerAlign sidePadding">
          <div>
            <Link to="/"><img src={flowmotion} alt="logo"/> </Link>
          </div>

          <div className="row">
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Support</Link>
              <Link to="/">Community</Link>
              <div className="column mobileLinks">
                <Link to="/">App</Link>
              </div>
            </div>
            <div className="column extraLinks">
              <Link to="/">Legal</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Compliance/Regulatory</Link>
            </div>


          </div>
        </div>

        <div>
          <p className="copyright whiteText textAlign">© 2017 FlowMotion technologies. All rights reserved.</p>
        </div>
      </div>

    )
  }
}
