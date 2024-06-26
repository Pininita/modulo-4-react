import React from 'react';

function Details(props) {
  return(
    <div>
        <p>
            <strong>Genre: </strong>{props.genre}
        </p>
        <p>
            <strong>Status: </strong>{props.status}
        </p>
    </div>
)
}

export default Details;
