import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Informacoes() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/informacoes')
      .then(res => setDados(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Informações</h2>
      {dados.map((item) => (
        <div key={item.id}>
          <h3>{item.titulo}</h3>
          <p>{item.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Informacoes;
