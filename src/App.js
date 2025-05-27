import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Informacoes from './pages/Informacoes/informacoes';
import Home from './pages/home/home'; // ou Menu.js, conforme seu nome final

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes" element={<Informacoes />} />
      </Routes>
    </Router>
  );
}

export default App;
