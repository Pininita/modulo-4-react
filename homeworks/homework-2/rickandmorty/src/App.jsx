import React, { useState, useEffect } from 'react';// import RickAndMortyCharacterCard from './assets/componentes/RickAndMortyCharacterCard';
import CharacterCard from './assets/componentes/characterCard'
import './App.css';



function App() {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);
  const [offSet, setOffset] = useState(1)

  // Paso 2
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${offSet}`)
      .then((response) => response.json())
      .then((data) => {

        console.log(data);

        setCharactersList(data.results);
      });
  }, [offSet])

  const changeNextPage = () => {
    setOffset(offSet + 1)
  }

  const changePrevPage = () => {
    setOffset(offSet - 1)
  }



  return (
    <div>
      <div className='content'>
        <div>
          <h1 className='title'>Personajes de Rick and morty</h1>
        </div>
        <div className='characters'>
          <div className='characterCard'>
            {
              charactersList.map((character) => (

                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  gender={character.gender}
                  status={character.status}
                />
              ))
            }
          </div>
        </div>

        <div className='paginacion'>
          <button disabled={offSet === 1} onClick={changePrevPage}>prev page</button>
          <p>{offSet}</p>
          <button disabled={offSet === 42} onClick={changeNextPage}>next page</button>
        </div>
      </div>
    </div>
  );
}


export default App;



