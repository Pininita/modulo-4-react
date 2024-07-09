import React, { useState, useEffect } from 'react';
import CharacterCard from './characterCard'
import { useLocation, useParams } from 'react-router-dom';

// import '../../App.css';



function CharacterPage(props) {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);
  const [offSet, setOffset] = useState(1)
  // const urlData = useLocation()
  // const  { characterName }  = useParams();
  const  urlData  = useLocation();
  const querryParamas = new URLSearchParams(urlData.search)
  const nameCharacter = querryParamas.get('name')
console.log(nameCharacter);
console.log(charactersList);
  // Paso 2
  useEffect(() => {
    if (nameCharacter) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${offSet}&name=${nameCharacter}`)
      .then((response) => response.json())
      .then((data) => {


        setCharactersList(data.results);
        // filterDataByCharacterName(data.results) 
      });
    }
    
  }, [offSet, nameCharacter])

  const changeNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setOffset(offSet + 1)
  }

  const changePrevPage = () => {
    window.scrollTo({
      top:0
    })
    setOffset(offSet - 1)
  }

const filterDataByCharacterName = (data) => {
 const filtrados = characterName ? data.filter((character)  => character.name.includes(characterName)) : data
 setCharactersList(filtrados)
}

  return (
    <div>
      <div className='content'>
        <div>
          <h1 className='title'>CHARACTERS R&M</h1>
        </div>
        <div>
          {/* <input type="text" placeholder='search...'/>
          <button>search</button> */}
        </div>
        <div className='characters'>
          <div className='characterCard'>
            {
              charactersList.map((character) => {
                console.log(character);
                return(
                <div className='item'>
                  <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  gender={character.gender}
                  status={character.status}
                />
                </div>
                
              )})
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


export default CharacterPage;