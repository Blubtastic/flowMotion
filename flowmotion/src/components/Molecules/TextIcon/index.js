import React from 'react';

const TextIcon = ({image, word}) => {

  return(
    <div className="column">
      <img src={image} alt="benefit" />
      <p>{word}</p>
    </div>
  )
}

export default TextIcon
