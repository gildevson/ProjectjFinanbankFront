// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo">Remessa <strong>Segura</strong></div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li><Link to="/">Início</Link></li>

          <li className="dropdown">
            <span>Layouts de Banco</span>
            <ul className="dropdown-menu">
              <li><Link to="/layout/bradesco">Bradesco</Link></li>
              <li><Link to="/layout/itau">Itaú</Link></li>
              <li><Link to="/layout/bb">Banco do Brasil</Link></li>
            </ul>
          </li>
          <li><Link to="/validadores">Validadores de Banco</Link></li>
          <li><Link to="/ocorrencias">Ocorrência Bancária</Link></li>
          <li><Link to="/motivos">Motivos</Link></li>
          <li className="dropdown">
            <span>Relatórios</span>
            <ul className="dropdown-menu">
              <li><Link to="/relatorio-vendas">Vendas</Link></li>
              <li><Link to="/relatorio-clientes">Clientes</Link></li>
            </ul>
          </li>

          <li><Link to="/informacoes">Informações</Link></li>
        </ul>
      </nav>

      <div className="login-icon">
        <Link to="/login" title="Admin">
          <FaUserCircle size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
