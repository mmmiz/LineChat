import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import {useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import "./style.css";


function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        {user ? 
        ( <Route path="/" element={<Home />} />) 
        : 
        (
          <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </>
        )}
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;
