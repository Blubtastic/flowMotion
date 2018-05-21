import React from 'react'

const InstaImage = ({ image }) => {
  const photo = require('../../../images/' + image);
  return(
    <div className="instaImage">
      <img src={photo} alt="instagram"/>
    </div>
  )
}
export default InstaImage
