import React from 'react'
import {Link} from 'react-router-dom';

const Position = ({ title, text, link }) => {
  return(
    <div className="positionCard centerAlign">
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div>
        <Link to={link}><div className="dummybox"/></Link>
      </div>
    </div>
  )
}
export default Position
