import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
       {isLoggedIn &&  <Route path='/user' element={<Welcome />} />} {" "}
        </Routes>
 
      </main>
    </React.Fragment>
  );
}

export default App;
