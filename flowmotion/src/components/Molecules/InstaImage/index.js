import React from 'react'

const InstaImage = ({ image }) => {
  const photo = require('../../../images/' + image);
  const instagram = require('../../../images/instagram.png');
  var divStyle = {
    backgroundImage: 'url(' + instagram + ')',
  };
  return(
    <div className="instaImage">
      <div style={divStyle} className="centerAlign">
        <img src={photo} alt="instagram"  />
      </div>
    </div>
  )
}
export default InstaImage
