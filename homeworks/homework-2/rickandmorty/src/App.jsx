import React, { useState, useEffect } from 'react';// import RickAndMortyCharacterCard from './assets/componentes/RickAndMortyCharacterCard';
import CharacterCard from './assets/componentes/characterCard'
import './App.css';



function App() {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);

  // Paso 2
  useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then((response) => response.json())
        .then((data) => {
           
            console.log(data); 

            setCharactersList(data.results);
        });
    }, [])  


  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      {/* 
        Paso 3. Uuando la variable creada en el paso 1, debes usar map para leer todos 
        personajes e ir agreando al doom el detalle de cáda uno usando el componenete 
        CharacterCard.jsx creado en la clase pasada. 
      */}
      <div>
        {
          charactersList.map( (character) => (
            
            <CharacterCard 
            key = {character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              status={character.status}
            />
          ))
        }
      </div>
      
      {/*
        OPCIONAL: Inclute un componenet de paginación y haz que la variable de el paso 1 
        se actualice dinamicamente con la información de cáda página
      */}
    </div>
  );
}


  // function App() {
  //   return (
  //     <div>
  //       <h1>Personajes de Rick and morty</h1>
  //       {/* 
  //         Ahora con esta lógica puedes renderizar vla información de varios personajes
  //       */}
  //       <RickAndMortyCharacterCard id={1}/>
  //       <RickAndMortyCharacterCard id={2}/>
  //       <RickAndMortyCharacterCard id={3}/>
  //       <RickAndMortyCharacterCard id={10}/>
  //     </div>
  //   );
  // }
  
  export default App;
  


