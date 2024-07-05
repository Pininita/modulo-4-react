import React from 'react';
import { Link } from 'react-router-dom';
import charactersphoto from './charactersphoto.png'
import portalgun from './portalgun.png'

// TODO: agrega estilos un diseño personalizado a la página
function HomePage() {
  return (
    <div className='home-page'>
      <div className='home-page-style'>
        <h1>
          Welcome to rick and morty web-page
        </h1>

        <h3> Enlaces rápidos </h3>

        <div className='enlaces'>
          <div className='enlaces-contenido1'>
            <img className='enlaces-image' src={charactersphoto} alt="characters" />
            <Link to="characters">
              <button>characters</button>
            </Link>
          </div>
          <div className='enlaces-contenido2'>
            <img className='enlaces-image' src={portalgun} alt="episodes" />
            <Link to="/episodes">
              <button>episodes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
export default HomePage;