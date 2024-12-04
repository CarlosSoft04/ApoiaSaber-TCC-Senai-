import React, { useState } from 'react';
import '../../styles/Aluno.css/desempenhoAtvAlunos.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
//import '../styles/desempenhoAtvAlunos.css'
// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const DesempenhoAtvAlunos = () => {
  // Estado para armazenar a seleção do aluno
  const [selecionado, setSelecionado] = useState('');

  // Função para capturar a mudança na seleção do aluno
  const handleSelectChange = (event) => {
    setSelecionado(event.target.value);
    console.log(event.target.value);  // Verifica a seleção do aluno
  };
  

  // Função para gerar dados fictícios para o gráfico de desempenho do aluno
  const gerarDadosDesempenho = () => {
    if (selecionado === 'aluno1') {
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
    } else if (selecionado === 'aluno2') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 2',
            data: [70, 80, 60, 75, 85], // Dados fictícios para outro aluno
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 1,
          },
        ],
      };
    } else if (selecionado === 'aluno3') {
      return {
        labels: ['Matemática', 'Português', 'História', 'Geografia', 'Ciências'],
        datasets: [
          {
            label: 'Desempenho de Aluno 3',
            data: [90, 85, 95, 92, 88], // Dados fictícios para outro aluno
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
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

      {/* Área de Seleção de Aluno */}
      <div className="selection-area">
        <h2>Selecione o seu Nome</h2>
        <form>
          <label htmlFor="aluno">Escolha seu nome:</label>
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

export default DesempenhoAtvAlunos;
