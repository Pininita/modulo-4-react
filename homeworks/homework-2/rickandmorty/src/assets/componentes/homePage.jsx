import React from 'react';
import { Link } from 'react-router-dom';

// TODO: agrega estilos un diseño personalizado a la página
function HomePage(props) {
  return (
    <div>
      <h1> Bienvenido a la pagina de rick and morty
      </h1>

      <h3> Enlaces rápidos </h3>
      
    <div className='enlaces'>
      <div>
        <img src="" alt="characters" />
        <Link to="characters">
        <button>characters</button>
        </Link>
      </div>
      <div>
        <img src="" alt="episodes" />
        <Link to="/episodes">
        <button>episodes</button>
        </Link>
      </div>
    </div>


    </div>
   
  );
}
export default HomePage;