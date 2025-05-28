import React from 'react';
import './home.css'; // Importa o arquivo de estilos para esta página

function Home() {
  return (
    <div className="home-container">
      <h1>Consulte sua remessa sem ficar olhando Layout em PDF</h1>
      <p>Pare de perder tempo navegando por layouts em PDF. Com nossa nova funcionalidade, você acessa as informações da sua remessa direto na tela, de forma rápida, prática e sem complicações.</p>

      <section className="features-section">
        <h2>Recursos Principais</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Gestão de Remessas</h3>
            <p>Automatize o envio de arquivos de remessa para diversos bancos com facilidade e segurança.</p>
          </div>
          <div className="feature-item">
            <h3>Processamento de Retornos</h3>
            <p>Importe e analise arquivos de retorno bancário, identificando ocorrências e conciliando pagamentos.</p>
          </div>
          <div className="feature-item">
            <h3>Validadores de Banco</h3>
            <p>Garanta a conformidade dos seus dados bancários com validadores específicos para cada instituição.</p>
          </div>
          <div className="feature-item">
            <h3>Relatórios Detalhados</h3>
            <p>Acesse relatórios completos de vendas e clientes para uma visão clara do seu desempenho financeiro.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Comece a Otimizar Suas Finanças Hoje Mesmo!</h2>
        <p>Descubra como a Remessa Segura pode transformar a gestão dos seus processos bancários.</p>
        <a href="/informacoes" className="cta-button">Saiba Mais</a>
      </section>

      <section className="stats-section">
        <h2>Nossos Números</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>+10.000</h3>
            <p>Remessas Processadas</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Taxa de Sucesso</p>
          </div>
          <div className="stat-item">
            <h3>+50</h3>
            <p>Usuarios Satisfeitos</p>
          </div>
        </div>
      </section>

      {/* Você pode adicionar mais conteúdo aqui, como depoimentos, etc. */}
    </div>
  );
}

export default Home;
