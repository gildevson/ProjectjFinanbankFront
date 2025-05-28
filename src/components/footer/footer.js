import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h3>Remessa <strong>Segura</strong></h3>
          <p>
            Simplificando a gestão de arquivos de remessa e retorno bancário para um controle financeiro mais eficiente.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h4>Links Úteis</h4>
          <ul>
            <li><Link to="/informacoes">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li> {/* Crie uma rota de contato se precisar */}
            <li><Link to="/politica-privacidade">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso">Termos de Uso</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Fale Conosco</h4>
          <p>Email: <a href="mailto:contato@remessasegura.com">contato@remessasegura.com</a></p>
          {/* <p>Telefone: (XX) XXXX-XXXX</p> */}
          {/* <p>Endereço: Rua Exemplo, 123 - Cidade - Estado</p> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Remessa Segura. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;