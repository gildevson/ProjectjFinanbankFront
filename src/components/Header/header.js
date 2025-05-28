import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Estado para verificar se está em mobile (largura menor que 992px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Opcional: Adicione logs para depuração se ainda tiver dúvidas sobre isMobile
  // console.log('Header Render - isMobile inicial:', isMobile, 'window.innerWidth inicial:', window.innerWidth);


  // Efeito para atualizar isMobile quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 992;
      setIsMobile(newIsMobile);
      // Opcional: Log no resize
      // console.log('Resize Event - isMobile:', newIsMobile, 'window.innerWidth:', window.innerWidth);
      if (window.innerWidth > 992) { // Se voltar para desktop, fecha o menu
        setMenuOpen(false);
        setDropdownOpen(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null); // Fecha qualquer dropdown ao abrir/fechar o menu principal
  };

  const handleDropdownToggle = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>Remessa <strong>Segura</strong></Link>
      </div>

      <div className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          {/* MUDANÇA AQUI: Ícone de Login MOVIDO PARA O TOPO */}
          {isMobile && ( // Renderiza apenas se for mobile
            <li className="mobile-login-item">
              <Link to="/login" onClick={closeMenu}>
                <FaUserCircle size={24} /> Admin (Login)
              </Link>
            </li>
          )}

          <li><Link to="/" onClick={closeMenu}>Início</Link></li>

          <li className={`dropdown ${dropdownOpen === 'layouts' ? 'active' : ''}`}>
            <span onClick={() => handleDropdownToggle('layouts')}>
              Layouts de Banco <i className="dropdown-arrow"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/layout/bradesco" onClick={closeMenu}>Bradesco</Link></li>
              <li><Link to="/layout/itau" onClick={closeMenu}>Itaú</Link></li>
              <li><Link to="/layout/bb" onClick={closeMenu}>Banco do Brasil</Link></li>
            </ul>
          </li>

          <li><Link to="/validadores" onClick={closeMenu}>Validadores de Banco</Link></li>
          <li><Link to="/ocorrencias" onClick={closeMenu}>Ocorrência Bancária</Link></li>
          <li><Link to="/motivos" onClick={closeMenu}>Motivos</Link></li>

          <li className={`dropdown ${dropdownOpen === 'reports' ? 'active' : ''}`}>
            <span onClick={() => handleDropdownToggle('reports')}>
              Relatórios <i className="dropdown-arrow"></i>
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/relatorio-vendas" onClick={closeMenu}>Vendas</Link></li>
              <li><Link to="/relatorio-clientes" onClick={closeMenu}>Clientes</Link></li>
            </ul>
          </li>

          <li><Link to="/informacoes" onClick={closeMenu}>Informações</Link></li>

        </ul>
      </nav>

      {/* Ícone de Login NO HEADER (SÓ VISÍVEL EM DESKTOP) */}
      {!isMobile && ( // Renderiza apenas se NÃO for mobile
        <div className="login-icon">
          <Link to="/login" title="Admin" onClick={closeMenu}>
            <FaUserCircle size={24} />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;