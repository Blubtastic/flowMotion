import React from 'react'
import {Link} from 'react-router-dom';
import arrow from '../../../images/arrowRightRed.png'

const Position = ({ title, text, link }) => {
  return(
    <Link to={link} className="positionCard blackText maxWidth row">
      <div className="row">
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className="verticalAlign">
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
    </Link>
  )
}
export default Position
