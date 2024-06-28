import React from 'react';

function Details(props) {
  return(
    <div>
        <p>
            <strong>gender: </strong>{props.gender}
        </p>
        <p>
            <strong>Status: </strong>{props.status}
        </p>
    </div>
)
}

export default Details;
