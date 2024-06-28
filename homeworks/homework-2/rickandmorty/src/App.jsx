import React from 'react';
import RickAndMortyCharacterCard from './assets/componentes/RickAndMortyCharacterCard';
import './App.css';



  function App() {
    return (
      <div>
        <h1>Personajes de Rick and morty</h1>
        {/* 
          Ahora con esta lógica puedes renderizar vla información de varios personajes
        */}
        <RickAndMortyCharacterCard id={1}/>
        <RickAndMortyCharacterCard id={2}/>
        <RickAndMortyCharacterCard id={3}/>
        <RickAndMortyCharacterCard id={10}/>
      </div>
    );
  }
  
  export default App;
  


