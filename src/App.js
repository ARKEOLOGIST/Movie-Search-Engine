import React from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
  return ( 
    <div className = "container">
      <h1 className="title">MovieDB</h1> 
      <div className="component">
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;