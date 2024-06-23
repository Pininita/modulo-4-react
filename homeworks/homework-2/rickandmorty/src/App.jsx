import React from 'react';
import CharacterCard from './assets/componentes/characterCard';
import './App.css';

function App() {
 const characterData = 
  [
    {id: 1,
      title: "rick sanchez",
      url: "https://koradiproductions.com/wp-content/uploads/2022/03/rick-sanchez.jpg",
      genre: "male",
      status: "active"
    },
    {id: 2,
      title: "morthy",
      url: "https://koradiproductions.com/wp-content/uploads/2022/03/rick-sanchez.jpg",
      genre: "male",
      status: "active"
    },
    {id: 3,
      title: "Summer",
      url: "https://koradiproductions.com/wp-content/uploads/2022/03/rick-sanchez.jpg",
      genre: "female",
      status: "active"
    }
  ];
  return (
    <div>
      {characterData.map((character) => (
        <CharacterCard
          key={character.id}
          title={character.title}
          url={character.url}
          genre={character.genre}
          status={character.status}
        />
      ))}
    </div>
  );
}

export default App;


