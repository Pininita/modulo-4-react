// import React from 'react';
import React, { useState, useEffect } from 'react';
import CharacterCard from './assets/componentes/characterCard';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 1;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result); 
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
      })
  }, []);

  return (
    <div>
    <h1>Personajes de Rick and morty</h1>
    {/* 
      Paso 3. Ahora debes renderizar el componente CharacterCard.jsx 
      enviandole como propiedades la información consultada 
      desde la API y que guardaste en las variables de estado de el paso 1 
    */}
    <CharacterCard 
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  </div>
  );
}

export default App;


