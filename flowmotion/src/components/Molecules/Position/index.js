import React from 'react'
import {Link} from 'react-router-dom';
import arrow from '../../../images/arrowBlack.png'

const Position = ({ title, text, link }) => {
  return(
    <Link to="/">
      <div className="positionCard centerAlign blackText">
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div>
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
    </Link>
  )
}
export default Position
