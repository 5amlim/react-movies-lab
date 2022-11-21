import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MoviesListPage';

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
        <Route path='/movies' element={<MovieListPage />} />
        <Route path='/actors' element={<ActorListPage />} />
      </Routes>
      
      </>
      :
      <LoginPage setUser={setUser}/>
    }
    </div>
  );
  
}

export default App;
