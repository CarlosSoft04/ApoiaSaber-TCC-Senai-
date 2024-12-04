import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "../../styles/Professor.css/telaProfessor.css";
import imgTeach from "../../assets/teacher.jpg"; // Importando a imagem corretamente

import CadastrarAluno from "../Professor/cadastrar-aluno";
import Atividades from "../Professor/atividades"; 
import Relatorios from "../Professor/relatorios"; 

// Importando os ícones do react-icons
import { FaUserPlus, FaBook, FaFileAlt } from "react-icons/fa";

function TelaProfessor() {
  return (
    <div className="App">
      {/* Seção de Menu (NavBar) */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            <li>
              {/* Adicionando ícone ao lado do texto */}
              <Link to="/cadastrar-aluno">
                <FaUserPlus /> Cadastrar Aluno
              </Link>
            </li>
            <li>
              <Link to="/atividades">
                <FaBook /> Atividades
              </Link>
            </li>
            <li>
              <Link to="/relatorios">
                <FaFileAlt /> Relatórios
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Seção Hero (Imagem e texto lado a lado) */}
      <section className="hero">
        <div className="hero-image">
          <img src={imgTeach} alt="Imagem telaProfessor" />
        </div>
        <div className="hero-text">
          <h3>
            <strong>Apoia Saber</strong>
          </h3>
          <p>
            A plataforma do professor foi desenvolvida para facilitar o ensino e
            melhorar a interação com os alunos. Aproveite a experiência.
          </p>
        </div>
      </section>

      {/* Seção de Conteúdo sem Card */}
      <section className="content">
        <h2>Bem-vindo à área do Professor!</h2>
        <p>
          Página que foi especialmente desenvolvida para apoiar os professores no
          gerenciamento e aprimoramento da experiência educacional. Aqui, você
          pode cadastrar alunos, <br />ver relatórios das turmas e dos alunos, facilitando a criação de um ambiente de
          aprendizado mais eficiente e envolvente para os mesmos.
        </p>
        <p>
          Nosso compromisso é proporcionar uma experiência excepcional para os
          estudantes, com uma interface moderna, intuitiva e fácil de usar,
          garantindo a <br /> melhor jornada de aprendizado possível.
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
