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
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02fdc37b-d6df-48ac-b5d6-26a71e5c72b0/d9ieocf-5a1296a0-2226-4bb1-9e98-3341e9983350.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyZmRjMzdiLWQ2ZGYtNDhhYy1iNWQ2LTI2YTcxZTVjNzJiMFwvZDlpZW9jZi01YTEyOTZhMC0yMjI2LTRiYjEtOWU5OC0zMzQxZTk5ODMzNTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w6jbRj4WVpQcHM4W4p7-HORqRT0PEuepc1zAMHSEblY",
      genre: "male",
      status: "active"
    },
    {id: 3,
      title: "Summer",
      url: "https://comicvine.gamespot.com/a/uploads/original/6/66303/4472085-summer_in_ricksy_business.jpg",
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


