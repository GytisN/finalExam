import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registracija from './Components/Pages/Registracija/Registracija.js';
import Vartotojai from './Components/Pages/Vartotojai/Vartotojai.js';
import Home from './Components/Pages/Home/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracija" element={<Registracija />} />
        <Route path="/vartotojai" element={<Vartotojai />} />
      </Routes>
    </Router>
  );
};

export default App;