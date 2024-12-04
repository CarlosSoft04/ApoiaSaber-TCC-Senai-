import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import imgAluno from '../../assets/aluno.jpg';  
import DesempenhoAtvAlunos from '../Aluno/desempenhoAtvAlunos';  
import AtividadesAluno from '../Aluno/atividadesAluno';  

function TelaAluno() {
  return (
    <div className="App">
      {/* Menu */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
          <li><Link to="/telaAluno/atividadesAluno">Atividades</Link></li>
          <li><Link to="/telaAluno/desempenhoAtvAlunos">Desempenho</Link></li>
          <li><Link to="/telaAluno/relatoriosAluno">Relatórios</Link></li>
          <li><Link to="/telaAluno/acompanharAlunos">Acompanhar Atividades</Link></li>

          </ul>
        </nav>
      </header>

      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-image">
          <img src={imgAluno} alt="Imagem Tela Aluno" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="hero-text">
          <h3>Bem-vindo à página do aluno</h3>
          <p>A plataforma foi projetada para ajudá-lo a acompanhar suas aulas, atividades e desempenho.</p>
        </div>
      </section>

      {/* Seção de Conteúdo */}
      <section className="content">
        <h2>Bem-vindo à área do aluno!</h2>
        <p>Aqui você pode acompanhar suas aulas, atividades e obter feedback sobre seu desempenho.</p>
      </section>

      {/* Definindo as Rotas Filhas */}
      <Routes>
  <Route path="desempenhoAtvAlunos" element={<DesempenhoAtvAlunos />} />
  <Route path="atividadesAluno" element={<AtividadesAluno />} />
</Routes>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default TelaAluno;
