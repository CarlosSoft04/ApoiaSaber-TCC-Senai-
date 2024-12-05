import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import imgAluno from '../../assets/aluno.jpg';  
import DesempenhoAtvAlunos from '../Aluno/desempenhoAtvAlunos';  
import AtividadesAluno from '../Aluno/atividadesAluno';  
=======
import { FaBook, FaChartLine, FaFileAlt } from 'react-icons/fa'; // Importing icons
import imgAluno from '../../assets/aluno.jpg';  
import DesempenhoAtvAlunos from '../Aluno/desempenhoAtvAlunos';  
import AtividadesAluno from '../Aluno/atividadesAluno';  
import '../../styles/Aluno.css/telaAluno.css';
>>>>>>> 23908f2bc8e3db807b1ad5f920f76e09903f3883

function TelaAluno() {
  return (
    <div className="App">
      {/* Menu */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
<<<<<<< HEAD
          <li><Link to="/telaAluno/atividadesAluno">Atividades</Link></li>
          <li><Link to="/telaAluno/desempenhoAtvAlunos">Desempenho</Link></li>
          <li><Link to="/telaAluno/relatoriosAluno">Relatórios</Link></li>
          <li><Link to="/telaAluno/acompanharAlunos">Acompanhar Atividades</Link></li>

=======
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
>>>>>>> 23908f2bc8e3db807b1ad5f920f76e09903f3883
          </ul>
        </nav>
      </header>

<<<<<<< HEAD
      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-image">
          <img src={imgAluno} alt="Imagem Tela Aluno" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="hero-text">
=======

      {/* Seção Hero */}
      <section className="herrro">
        <div className="herrro-image">
          <img src={imgAluno} alt="Imagem Tela Aluno" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="herrro-text">
>>>>>>> 23908f2bc8e3db807b1ad5f920f76e09903f3883
          <h3>Bem-vindo à página do aluno</h3>
          <p>A plataforma foi projetada para ajudá-lo a acompanhar suas aulas, atividades e desempenho.</p>
        </div>
      </section>

      {/* Seção de Conteúdo */}
<<<<<<< HEAD
      <section className="content">
=======
      <section className="conttent">
>>>>>>> 23908f2bc8e3db807b1ad5f920f76e09903f3883
        <h2>Bem-vindo à área do aluno!</h2>
        <p>Aqui você pode acompanhar suas aulas, atividades e obter feedback sobre seu desempenho.</p>
      </section>

      {/* Definindo as Rotas Filhas */}
      <Routes>
<<<<<<< HEAD
  <Route path="desempenhoAtvAlunos" element={<DesempenhoAtvAlunos />} />
  <Route path="atividadesAluno" element={<AtividadesAluno />} />
</Routes>


      {/* Footer */}
      <footer className="footer">
=======
        <Route path="/desempenhoAtvAlunos" element={<DesempenhoAtvAlunos />} />
        <Route path="/atividadesAluno" element={<AtividadesAluno />} />
      </Routes>

      {/* Footer */}
      <footer className="ffooter">
>>>>>>> 23908f2bc8e3db807b1ad5f920f76e09903f3883
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default TelaAluno;
