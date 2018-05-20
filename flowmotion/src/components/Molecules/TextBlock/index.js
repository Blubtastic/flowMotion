import React from 'react'

const Cover = ({ title, p1, p2 }) => {
  return(
      <div>
        <h2>{title}</h2>
        <p>{p1}</p>
        <br/>
        <p>{p2}</p>
      </div>
  )
}

export default Cover
