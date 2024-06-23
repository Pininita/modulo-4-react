import React from 'react';


function Title(props) {
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
      <h2 className='subtitle'>{props.subtitle}</h2>
    </div>
  )
}

export default Title;