import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Informacoes from './pages/Informacoes/informacoes';
import Header from './components/Header/header';

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