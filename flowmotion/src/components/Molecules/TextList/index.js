import React from 'react';

const TextList = ({text}) => {

  //One bullet item for each
  let bullets = [];
  for (let x = 0; x < text.length; x++) {
    bullets.push(<li>{text[x]}</li>);
  }
  bullets.shift();
  console.log(bullets);

  return(
    <div className="bulletItems">
      <h3>{text[0]}</h3>
      <ul className="column ">
        {bullets}
      </ul>
    </div>
  )
}

export default TextList
