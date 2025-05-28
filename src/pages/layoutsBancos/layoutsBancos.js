import React, { useState, useEffect } from 'react';
import './layoutsBancos.css'; // Não esqueça de importar seu CSS

function LayoutsBanco() {
  const [layouts, setLayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lista de layouts simulados (Banco do Brasil e Bradesco)
    const simulatedBankLayouts = [
      {
        id: 'bb-layout-001',
        banco: 'Banco do Brasil',
        nome: 'Boleto BB Padrão V1',
        descricao: 'Layout padrão para emissão de boletos do Banco do Brasil. Versão 1.0. Compatível com CNAB 240.',
        tipo: 'Boleto Bancário',
        status: 'Ativo',
        versao: '1.0',
        dataCriacao: '2023-01-15',
        ultimaAtualizacao: '2024-03-20',
      },
      {
        id: 'bb-layout-002',
        banco: 'Banco do Brasil',
        nome: 'Extrato BB Conciliação Financeira',
        descricao: 'Layout para importação de extratos bancários para conciliação. Formato OFX customizado.',
        tipo: 'Extrato Bancário',
        status: 'Ativo',
        versao: '2.1',
        dataCriacao: '2023-03-01',
        ultimaAtualizacao: '2024-05-10',
      },
      {
        id: 'bb-layout-003',
        banco: 'Banco do Brasil',
        nome: 'Remessa BB Pagamento Fornecedores',
        descricao: 'Layout para arquivos de remessa de pagamentos a fornecedores. Padrão FEBRABAN.',
        tipo: 'Pagamento',
        status: 'Ativo',
        versao: '1.5',
        dataCriacao: '2022-11-01',
        ultimaAtualizacao: '2023-08-01',
      },
      {
        id: 'bb-layout-004',
        banco: 'Banco do Brasil',
        nome: 'Retorno BB Boletos Liquidados',
        descricao: 'Layout para arquivos de retorno de boletos liquidados. Necessário para baixa automática.',
        tipo: 'Retorno Bancário',
        status: 'Inativo', // Status Inativo para testar a estilização
        versao: '1.0 (Obsoleto)',
        dataCriacao: '2022-05-20',
        ultimaAtualizacao: '2023-01-05',
      },
      {
        id: 'bra-layout-001',
        banco: 'Bradesco',
        nome: 'Boleto Bradesco Padrão V2',
        descricao: 'Layout atualizado para boletos Bradesco. Incorpora novas regras de registro.',
        tipo: 'Boleto Bancário',
        status: 'Ativo',
        versao: '2.0',
        dataCriacao: '2024-02-01',
        ultimaAtualizacao: '2025-01-20',
      },
      {
        id: 'bra-layout-002',
        banco: 'Bradesco',
        nome: 'Conciliação Bradesco Cartões',
        descricao: 'Layout específico para extratos de vendas de cartão de crédito e débito.',
        tipo: 'Extrato Bancário',
        status: 'Ativo',
        versao: '1.2',
        dataCriacao: '2023-07-10',
        ultimaAtualizacao: '2024-11-15',
      },
      {
        id: 'bra-layout-003',
        banco: 'Bradesco',
        nome: 'Remessa Bradesco Folha Pagamento',
        descricao: 'Layout para envio de arquivos de folha de pagamento. Alta segurança e criptografia.',
        tipo: 'Pagamento',
        status: 'Ativo',
        versao: '3.0',
        dataCriacao: '2021-09-01',
        ultimaAtualizacao: '2024-09-01',
      },
      {
        id: 'bra-layout-004',
        banco: 'Bradesco',
        nome: 'Retorno Bradesco Ocorrências',
        descricao: 'Layout para tratamento de retornos com ocorrências bancárias e erros.',
        tipo: 'Retorno Bancário',
        status: 'Ativo',
        versao: '1.1',
        dataCriacao: '2023-04-25',
        ultimaAtualizacao: '2024-06-05',
      },
    ];

    // Simulação da busca de dados com um atraso para imitar uma requisição de rede
    const fetchSimulatedLayouts = () => {
      setLoading(true);
      setError(null); // Limpa qualquer erro anterior

      setTimeout(() => {
        try {
          // Aqui você pode adicionar lógica para simular erros também (descomente para testar)
          // if (Math.random() < 0.2) { // 20% de chance de erro
          //   throw new Error("Erro simulado de rede!");
          // }

          setLayouts(simulatedBankLayouts); // Usa os dados simulados
        } catch (err) {
          console.error("Erro simulado ao carregar layouts:", err);
          setError("Não foi possível carregar os layouts simulados. Tente novamente mais tarde.");
        } finally {
          setLoading(false);
        }
      }, 1000); // Simula um atraso de 1 segundo (1000ms) para carregar
    };

    fetchSimulatedLayouts(); // Chama a função que simula a busca
  }, []); // O array vazio garante que isso rode apenas uma vez ao montar o componente

  if (loading) {
    return <div className="layouts-banco-container"><div className="loading-message">Carregando layouts...</div></div>;
  }

  if (error) {
    return <div className="layouts-banco-container"><div className="error-message">Erro: {error}</div></div>;
  }

  if (layouts.length === 0) {
    return <div className="layouts-banco-container"><div className="no-layouts-message">Nenhum layout encontrado.</div></div>;
  }

  return (
    <div className="layouts-banco-container">
      <h1>Lista de Layouts de Banco</h1>
      <ul>
        {layouts.map((layout) => (
          <li key={layout.id}> 
            <h2>{layout.banco} - {layout.nome}</h2> {/* Adicionando o banco no título */}
            <p><strong>Descrição:</strong> {layout.descricao}</p>
            <p><strong>Tipo:</strong> {layout.tipo}</p>
            <p><strong>Versão:</strong> {layout.versao}</p>
            {/* Ajuste a classe CSS do status para corresponder ao seu CSS anterior */}
            <p className={layout.status.toLowerCase() === 'ativo' ? 'status-ativo' : 'status-inativo'}>
              <strong>Status:</strong> {layout.status}
            </p>
            <p><strong>Criação:</strong> {layout.dataCriacao}</p>
            <p><strong>Última Atualização:</strong> {layout.ultimaAtualizacao}</p>
            <button onClick={() => alert(`Detalhes do layout: ${layout.nome} (${layout.banco})`)}>Ver Detalhes</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LayoutsBanco;