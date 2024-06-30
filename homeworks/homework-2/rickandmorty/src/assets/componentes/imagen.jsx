import React from 'react';


function Image(props) {
  return <img className='image' src={props.url} alt="Foto de el artista/personaje" />;
}

export default Image;