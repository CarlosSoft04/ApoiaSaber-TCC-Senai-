import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaBook, FaChartLine, FaFileAlt } from 'react-icons/fa'; // Importing icons
import imgAluno from '../../assets/aluno.jpg';  
import DesempenhoAtvAlunos from '../Aluno/desempenhoAtvAlunos';  
import AtividadesAluno from '../Aluno/atividadesAluno';  
import '../../styles/Aluno.css/telaAluno.css';

function TelaAluno() {
  return (
    <div className="App">
      {/* Menu */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            {/* Ajuste dos links para caminhos relativos */}
            <li>
              {/* Adicionando ícone ao lado do texto */}
              <Link to="/atividadesAluno">
                <FaFileAlt /> Atividade
              </Link>
            </li>
            <li>
              <Link to="/desempenhoAtvAlunos">
                <FaBook /> Desempenho
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Seção Hero */}
      <section className="herrro">
        <div className="herrro-image">
          <img src={imgAluno} alt="Imagem Tela Aluno" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="herrro-text">
          <h3>Bem-vindo à página do aluno</h3>
          <p>A plataforma foi projetada para ajudá-lo a acompanhar suas aulas, atividades e desempenho.</p>
        </div>
      </section>

      {/* Seção de Conteúdo */}
      <section className="conttent">
        <h2>Bem-vindo à área do aluno!</h2>
        <p>Aqui você pode acompanhar suas aulas, atividades e obter feedback sobre seu desempenho.</p>
      </section>

      {/* Definindo as Rotas Filhas */}
      <Routes>
        <Route path="/desempenhoAtvAlunos" element={<DesempenhoAtvAlunos />} />
        <Route path="/atividadesAluno" element={<AtividadesAluno />} />
      </Routes>

      {/* Footer */}
      <footer className="ffooter">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default TelaAluno;
