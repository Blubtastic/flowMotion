import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Button = ({ text, route, link  }) => {
if (route) {
    return(
      <Link to={route}> <div className="button">{text}</div> </Link>
    )
  }
  else{
    return(
      <a href={link}> <div className="button">{text}</div> </a>
    )
  }
}

export default Button
