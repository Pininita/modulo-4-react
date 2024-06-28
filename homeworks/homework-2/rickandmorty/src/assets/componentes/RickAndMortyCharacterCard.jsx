import React, { useState, useEffect } from 'react';
// import React from 'react';
import CharacterCard from './characterCard'

function RickAndMortyCharacterCard(props){
    const rickAndMortyCharacterId = props.id;
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
        .then(response => response.json())
      .then(data => setDatos(data));
    }, [rickAndMortyCharacterId])

const {name, image, gender, status} = datos;

    return (
        <div>
          <CharacterCard 
            id={rickAndMortyCharacterId}
            name={name}
            image={image}
            gender={gender}
            status={status}
          />
        </div>
      );
}

export default RickAndMortyCharacterCard;
