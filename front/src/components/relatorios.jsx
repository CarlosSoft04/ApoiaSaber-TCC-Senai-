import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RelatorioDesempenho = () => {
  // Estado para armazenar as seleções de aluno ou turma
  const [selecionado, setSelecionado] = useState('');
  const [tipoSelecao, setTipoSelecao] = useState('aluno');

  // Função para capturar a mudança na seleção
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === 'aluno') {
      setTipoSelecao('aluno');
    } else {
      setTipoSelecao('turma');
    }
    setSelecionado(value);
  };

  // Função para gerar dados fictícios para o gráfico
  const gerarDadosDesempenho = () => {
    if (tipoSelecao === 'aluno' && selecionado === 'aluno1') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 1',
            data: [80, 75, 90, 85, 70], // Dados fictícios
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (tipoSelecao === 'turma' && selecionado === 'turma1') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho da Turma 1',
            data: [70, 60, 65, 80, 75], // Dados fictícios para a turma
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    }
    return {};
  };

  // Dados do gráfico
  const dadosDesempenho = gerarDadosDesempenho();

  return (
    <div className="container">
      <h1>Relatório de Desempenho</h1>

      {/* Área de Seleção */}
      <div className="selection-area">
        <h2>Selecione o Aluno ou Turma</h2>
        <form>
          <label htmlFor="turma">Escolha a Turma:</label>
          <select
            id="turma"
            name="turma"
            onChange={handleSelectChange}
            value={selecionado}
          >
            <option value="">Selecione uma Turma</option>
            <option value="turma1">Turma 1</option>
            <option value="turma2">Turma 2</option>
            <option value="turma3">Turma 3</option>
          </select>

          <label htmlFor="aluno">Ou Escolha o Aluno:</label>
          <select
            id="aluno"
            name="aluno"
            onChange={handleSelectChange}
            value={selecionado}
          >
            <option value="">Selecione um Aluno</option>
            <option value="aluno1">Aluno 1</option>
            <option value="aluno2">Aluno 2</option>
            <option value="aluno3">Aluno 3</option>
          </select>
        </form>
      </div>

      {/* Área de Exibição de Desempenho */}
      <div className="performance-area">
        <h2>Desempenho</h2>
        {selecionado && (
          <div className="chart-container">
            <Line data={dadosDesempenho} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      return tooltipItem.raw + '%';
                    },
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatorioDesempenho;
