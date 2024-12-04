import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../styles/Professor.css/relatorios.css'
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
    // Dados para o Aluno 1, 2 e 3
    if (tipoSelecao === 'aluno' && selecionado === 'aluno1') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 1',
            data: [80, 75, 90, 85, 70],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (tipoSelecao === 'aluno' && selecionado === 'aluno2') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 2',
            data: [60, 70, 65, 80, 85],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (tipoSelecao === 'aluno' && selecionado === 'aluno3') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 3',
            data: [90, 80, 95, 88, 92],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    }
    // Dados para a Turma 1, 2 e 3
    else if (tipoSelecao === 'turma' && selecionado === 'turma1') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho da Turma 1',
            data: [70, 60, 65, 80, 75],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (tipoSelecao === 'turma' && selecionado === 'turma2') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho da Turma 2',
            data: [60, 70, 80, 65, 70],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (tipoSelecao === 'turma' && selecionado === 'turma3') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho da Turma 3',
            data: [80, 85, 75, 90, 78],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    }

    // Retorna um gráfico vazio se nada for selecionado
    return {
      labels: [],
      datasets: [],
    };
  };

  // Dados do gráfico
  const dadosDesempenho = gerarDadosDesempenho();

  return ( 





    
    <div className="conttainer">
      <h2 className='relatorio_desempenho'>Relatório de Desempenho</h2>
     
      {/* Área de Seleção */}
      <div className="area-selecionada">
        <h3>Selecione o Aluno ou Turma</h3>
        <form>
          <label className="escolha_turma"htmlFor="turma">Escolha a Turma:</label>
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

          <label className="escolha_aluno"htmlFor="aluno">Ou Escolha o Aluno:</label>
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
      <div className="performance__area">
        <h3>Desempenho</h3>
        {selecionado && dadosDesempenho.datasets.length > 0 && (
          <div className="chart__container">
            <Line 
              data={dadosDesempenho} 
              options={{
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
              }} 
            />
          </div>
        )}
      </div>
    </div>
  );
};


export default RelatorioDesempenho;
