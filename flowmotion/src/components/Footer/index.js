import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css'
import flowmotionFull from '../../images/flowmotionFull.svg';

export default class Footer extends Component {

  render(){
    return(
      <div className="footerContainer">

        <div className="footer row sidePadding">
          <div>
            <Link className="largeFooterLogo" to="/"><img src={flowmotionFull} alt="logo"/> </Link>

          </div>

          <div className="row">
            <div className="column">
              <a href="https://flowmotion.co">Home</a>
              <a href="https://flowmotion.co/pre-order">Shop</a>
              <a href="https://support.flowmotion.co/hc/en-us">Support</a>
            </div>
            <div className="column extraLinks ">
              <a href="https://flowmotion.co/terms">Terms & Conditions</a>
              <a href="https://flowmotion.co/terms">Privacy Policy</a>
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
