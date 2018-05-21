import React from 'react';

const TextIcon = ({image, word}) => {
    const icon = require('../../../images/' + image);
  return(
    <div className="column">
      <img src={icon} alt="benefit" />
      <p>{word}</p>
    </div>
  )
}

export default TextIcon
