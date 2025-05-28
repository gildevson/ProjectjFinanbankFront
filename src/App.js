import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Corrigido: 'Header' com H maiúsculo
import Footer from './components/Footer/Footer'; // Corrigido: 'Footer' com F maiúsculo
import Informacoes from './pages/Informacoes/informacoes';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <Header />
      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;