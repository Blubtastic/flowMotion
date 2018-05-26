import React from 'react'

const Cover = ({ content }) => {
  //First content item is the title
  var title = content[0];
  //Generate one paragraph for each other line in the array.
  var paragraphs = content.map((content) =>
    <p key={content.toString()}>{content}</p>
  )
  paragraphs.shift();

  return(
      <div>
        <h2>{title}</h2>
        {paragraphs}
      </div>
  )
}

export default Cover
