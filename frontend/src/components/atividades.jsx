import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/atividades.css"; // Estilos para a tela de atividades

const CadastroAtividade = () => {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [turmaSelecionada, setTurmaSelecionada] = useState(null);

  // Lista de alunos (exemplo)
  const alunos = [
    { id: 1, nome: "João Silva", turma: "Turma A" },
    { id: 2, nome: "Maria Oliveira", turma: "Turma B" },
    { id: 3, nome: "Carlos Santos", turma: "Turma A" },
    { id: 4, nome: "Ana Costa", turma: "Turma C" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const atividade = {
      titulo,
      data,
      descricao,
      alunoSelecionado,
      turmaSelecionada,
    };
    console.log("Atividade cadastrada:", atividade);
  };

  return (
    <div className="cadastro-atividade"> {/* Classe específica para isolar os estilos */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            <li><Link to="/cadastrar-aluno">Cadastrar Aluno</Link></li>
            <li><Link to="/atividades">Atividades</Link></li>
            <li><Link to="/relatorios">Relatórios</Link></li>
          </ul>
        </nav>
      </header>

      {/* Formulário de Cadastro de Atividade */}
      <div className="form-container">
        <h2>Cadastro de Atividade</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título da Atividade</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="data">Data da Atividade</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição da Atividade</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="aluno">Selecionar Aluno</label>
            <select
              id="aluno"
              value={alunoSelecionado}
              onChange={(e) => setAlunoSelecionado(e.target.value)}
            >
              <option value="">Selecione um aluno</option>
              {alunos.map((aluno) => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome} - {aluno.turma}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="turma">Ou selecionar uma turma inteira</label>
            <select
              id="turma"
              value={turmaSelecionada}
              onChange={(e) => setTurmaSelecionada(e.target.value)}
            >
              <option value="">Selecione uma turma</option>
              <option value="Turma A">Turma A</option>
              <option value="Turma B">Turma B</option>
              <option value="Turma C">Turma C</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Cadastrar Atividade</button>
          </div>
        </form>
      </div>

      {/* Rodapé */}
      <footer className="cadastro-footer">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default CadastroAtividade;
