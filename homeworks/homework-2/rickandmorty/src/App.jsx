import React from 'react';
import billieImage from './assets/billie.jpg'; // Ajusta la ruta según la ubicación real de tu imagen
import './App.css';

function App() {
  return (
    <div>
      <h1>Billie Eilish</h1>
      <img className='billie-image' src={billieImage} alt="Billie Eilish" />
      <br />
      <p>Billie Eilish es una cantante y compositora estadounidense conocida por su estilo pop alternativo y
        electropop. Su música explora temas profundos como la juventud, el amor y la salud mental.
        Ganó popularidad con su sencillo "Ocean Eyes" en 2016 y ha lanzado álbumes exitosos como
        "When We All Fall Asleep, Where Do We Go?" (2019), destacándose por canciones como "Bad Guy".
        Su estilo único y su impacto cultural la han convertido en una figura influyente en la música
        contemporánea.</p>
    </div>
  );
}


export default App;

