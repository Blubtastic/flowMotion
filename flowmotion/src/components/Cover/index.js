import React from 'react'
import './cover.css';
import Button from '../Button'

const Cover = ({ image, height }) => {
  const photo = require('../../images/' + image);
  //Inline html style in order to use parameters for changing some CSS
  var divStyle = {
    height: height,
    backgroundImage: "url(" + photo + ")",
  }
  return <div className="cover-img" style={divStyle}>
    <div className="shaded column">
      <h1>Join the FlowMotion Community</h1>
      <div className="corner-button"><div><Button/></div></div>
    </div>

  </div>
}

export default Cover
