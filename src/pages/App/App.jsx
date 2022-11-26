import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { movies } from "../../data.js";

import NavBar from '../../components/NavBar/NavBar';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MoviesDetailPage/MovieDetailPage';

function App() {
  const [user, setUser] = useState(null)


  return (
    <div className="App">
      App
    { user ?
      <>
      {/* <MovieListPage/> */}
      <NavBar user={user}/>
      <Routes>
        <Route path='/' element={<MovieListPage movies={movies} />} />
        <Route path='/actors' element={<ActorListPage movies={movies} />} />
        <Route path='/movies/:title' element={<MovieDetailPage movies={movies}/>} />
      </Routes>
      </>
      :
      <>
      <LoginPage setUser={setUser}/>
      </>
    }
    </div>
  );
  
}

export default App;
