import React from 'react';
import '../../../src/App.css'; // Asegúrate de importar tu hoja de estilos correctamente

function Details(props) {
  let statusClass = '';

  // Verifica props.status en lugar de solo status
  if (props.status === 'Alive') {
    statusClass = 'Alive';
  } else if (props.status === 'unknown') {
    statusClass = 'unknown';
  } else if (props.status === 'Dead') {
    statusClass = 'Dead';
  }

  return (
    <div>
      <p className='gender'>
        <strong>Gender:</strong> {props.gender}
      </p>
      <p className={`status ${statusClass}`}>
        <strong>Status:</strong> {props.status}
      </p>
    </div>
  );
}

export default Details;

