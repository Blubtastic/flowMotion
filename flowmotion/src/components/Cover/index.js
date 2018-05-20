import React from 'react'
import './cover.css';


const Cover = ({ image, height, top, Component }) => {
  const photo = require('../../images/' + image);
  //Inline html style in order to use parameters for changing some CSS
  var divStyle = {
    height: height,
    backgroundImage: "url(" + photo + ")",
    backgroundPosition: "center " + top,
  }

  //Returns the cover image + the component passed as a parameter.
  return <div className="cover-img" style={divStyle}>
    {Component}
  </div>
}

export default Cover
