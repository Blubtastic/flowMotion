import React from 'react'
import {Link} from 'react-router-dom';

const Button = ({ text, link }) => {
  return(
    <Link to={link}><div className="button">{text}</div></Link>
  )
}

export default Button
