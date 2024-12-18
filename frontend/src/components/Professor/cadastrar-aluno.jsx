import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Professor.css/cadastrar-aluno.css'; // Certifique-se de que o CSS está sendo importado corretamente

// Importando os ícones do react-icons
import { FaUserPlus, FaSearch, FaTrashAlt, FaBook, FaFileAlt, FaHome } from 'react-icons/fa';

function TelaCadastrarAluno() {
  // Estado para armazenar as informações do aluno
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [turma, setTurma] = useState('');
  const [imagem, setImagem] = useState(null);

  // Função para lidar com a alteração da imagem
  const handleImagemChange = (e) => {
    setImagem(e.target.files[0]);
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nome,
      email,
      telefone,
      sexo,
      turma,
      imagem,
    });
  };

  return (
    <div className="cadastrar-aluno">
      {/* Seção de Menu (NavBar) */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            <li>
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
            <li>
              <Link to="/telaProfessor">
                <FaHome /> Principal
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Seção do Formulário */}
      <section className="content">
        <h2>Cadastrar Novo Aluno</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label>Sexo:</label>
          <div>
            <input
              type="radio"
              id="sexo-masculino"
              name="sexo"
              value="Masculino"
              onChange={(e) => setSexo(e.target.value)}
            />
            <label htmlFor="sexo-masculino">Masculino</label>
            <input
              type="radio"
              id="sexo-feminino"
              name="sexo"
              value="Feminino"
              onChange={(e) => setSexo(e.target.value)}
            />
            <label htmlFor="sexo-feminino">Feminino</label>
          </div>

          <label>Turma:</label>
          <div>
            <input
              type="radio"
              id="turma-a"
              name="turma"
              value="A"
              onChange={(e) => setTurma(e.target.value)}
            />
            <label htmlFor="turma-a">Turma A</label>
            <input
              type="radio"
              id="turma-b"
              name="turma"
              value="B"
              onChange={(e) => setTurma(e.target.value)}
            />
            <label htmlFor="turma-b">Turma B</label>
            <input
              type="radio"
              id="turma-c"
              name="turma"
              value="C"
              onChange={(e) => setTurma(e.target.value)}
            />
            <label htmlFor="turma-c">Turma C</label>
          </div>

          <label htmlFor="imagem">Imagem do Aluno:</label>
          <input
            type="file"
            id="imagem"
            onChange={handleImagemChange}
          />

          <div className="buttons">
            <button type="submit">
              <FaUserPlus /> Criar
            </button>
            <button type="button">
              <FaTrashAlt /> Excluir
            </button>
          </div>
        </form>

        <div className="search">
          <label htmlFor="search">
            <FaSearch /> Pesquisar Aluno:
          </label>
          <input type="text" id="search" placeholder="Digite o nome do aluno" />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default TelaCadastrarAluno;
