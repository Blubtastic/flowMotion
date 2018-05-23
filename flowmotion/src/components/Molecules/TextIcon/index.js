import React from 'react';

const TextIcon = ({image, word}) => {

  return(
    <div className="column centerAlign">
      <img src={image} alt="benefit" />
      <p>{word}</p>
    </div>
  )
}

export default TextIcon
