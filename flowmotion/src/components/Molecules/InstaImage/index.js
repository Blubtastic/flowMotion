import React from 'react'

const InstaImage = ({ image, link }) => {
  const photo = require('../../../images/' + image);
  const instagram = require('../../../images/instagram.png');
  var divStyle = {
    backgroundImage: 'url(' + instagram + ')',
  };
  return(
    <div className="instaImage">
      <a href={link}>
        <div style={divStyle} className="horizontalAlign verticalAlign">
          <img src={photo} alt="instagram"  />
        </div>
      </a>
    </div>
  )
}
export default InstaImage
