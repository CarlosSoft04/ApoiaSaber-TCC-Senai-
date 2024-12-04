import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // Remover o Router aqui
import '../../styles/Professor.css/telaProfessor.css'; 
import imgTeach from '../../assets/teacher.jpg'; // Importando a imagem corretamente


import CadastrarAluno from '../Professor/cadastrar-aluno';
import Atividades from '../Professor/atividades';  // Importando corretamente o componente Atividades
//import Turmas from '../components/turmas';          // Importando corretamente o componente Turmas
import Relatorios from '../Professor/relatorios';  // Importando corretamente o componente Relatorios

function TelaProfessor() {
  return (
    <div className="App">
      {/* Seção de Menu (NavBar) */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            <li><Link to="/cadastrar-aluno">Cadastrar Aluno</Link></li>
            <li><Link to="/atividades">Atividades</Link></li>
          
            <li><Link to="/relatorios">Relatórios</Link></li>
          </ul>
        </nav>
      </header>

      {/* Seção Hero (Imagem e texto lado a lado) */}
      <section className="hero">
        <div className="hero-image">
          <img src={imgTeach} alt="Imagem telaProfessor" />
        </div>
        <div className="hero-text">
          <h3>Bem-vindo à nossa plataforma</h3>
          <p>
            A plataforma do professor foi desenvolvida para facilitar o ensino e melhorar a interação com os alunos. 
            Aproveite a experiência.
          </p>
        </div>
      </section>

      {/* Seção de Conteúdo sem Card */}
      <section className="content">
        <h2>Bem-vindo à área do professor!</h2>
        <p>
          Esta é uma área dedicada ao professor, para que possa facilitar o aprendizado do aluno, melhorando a comunicação e orientação.
        </p>
        <p>
          Nosso objetivo é fornecer uma ótima experiência para os estudantes, com um design moderno e intuitivo.
        </p>
      </section>

      {/* Definindo as Rotas com Routes (substituindo Switch) */}
      <Routes>
        <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
        <Route path="/atividades" element={<Atividades />} />
       
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default TelaProfessor;
