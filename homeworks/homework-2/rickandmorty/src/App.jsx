import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './assets/componentes/homePage';
import CharacterPage from './assets/componentes/characterPage';
import EpisodesPage from './assets/componentes/episodesPage';
import NotFoundPage from './assets/componentes/notFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to='/'><span className='nav-links-text'>Home</span></Link>
            </li>
            <li>
              <Link to='/characters'><span className='nav-links-text'>Characters</span></Link>
            </li>
            <li>
              <Link to='/episodes'><span className='nav-links-text'>Episodes</span></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
