import React from 'react';
import './home.css'; // você pode mover o CSS também para uma pasta pages ou global

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Nosso Sistema</h1>
      <p>Este sistema apresenta informações do banco de dados PostgreSQL.</p>
    </div>
  );
}

export default Home;