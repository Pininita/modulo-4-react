import React from 'react';

function Details(props) {
  return (
    <div>
      <p>
        <b>Gender:</b> {props.genre}
      </p>
      <p>
        <b>State:</b> {props.status}
      </p>
    </div>
  );
}

export default Details;
