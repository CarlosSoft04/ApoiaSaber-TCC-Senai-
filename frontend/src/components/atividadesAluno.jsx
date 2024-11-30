import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegação
import '../styles/atividadesAlunos.css'; // Estilos específicos para atividades

function AtividadesAluno() {
  // Estado para o formulário de atividades
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dificuldades, setDificuldades] = useState({
    facil: false,
    media: false,
    dificil: false
  });
  const [imagem, setImagem] = useState(null);

  // Função para lidar com as mudanças nos campos de texto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'titulo') {
      setTitulo(value);
    } else if (name === 'descricao') {
      setDescricao(value);
    }
  };

  // Função para lidar com o estado dos checkboxes de dificuldade
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDificuldades(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  // Função para lidar com o upload da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
  };

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
    console.log("Dificuldades:", dificuldades);
    console.log("Imagem:", imagem);
  };

  return (
    <div className="AtividadesAluno">
      {/* Menu (NavBar) */}
      <header className="menu">
        <nav>
          <ul className="nav-list">
            <li><Link to="/aulasAluno">Aulas</Link></li>
            <li><Link to="/atividadesAluno">Atividades</Link></li>
            <li><Link to="/notasAluno">Notas</Link></li>
            <li><Link to="/relatoriosAluno">Relatórios</Link></li>
          </ul>
        </nav>
      </header>

      {/* Seção de Conteúdo */}
      <section className="content">
        <h2>Adicionar Atividade</h2>
        <p>Preencha o formulário abaixo para anexar sua tarefa.</p>

        {/* Formulário de Tarefa */}
        <form onSubmit={handleSubmit}>
          {/* Campo para Título */}
          <div className="form-group">
            <label htmlFor="titulo">Título da Atividade</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={titulo}
              onChange={handleInputChange}
              placeholder="Digite o título da atividade"
              required
            />
          </div>

          {/* Campo para Descrição */}
          <div className="form-group">
            <label htmlFor="descricao">Descrição da Atividade</label>
            <textarea
              id="descricao"
              name="descricao"
              value={descricao}
              onChange={handleInputChange}
              placeholder="Digite a descrição da atividade"
              rows="4"
              required
            />
          </div>

          {/* Opções de Dificuldade */}
          <div className="form-group">
            <label>Dificuldade</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="facil"
                  checked={dificuldades.facil}
                  onChange={handleCheckboxChange}
                />
                Fácil
              </label>
              <label>
                <input
                  type="checkbox"
                  name="media"
                  checked={dificuldades.media}
                  onChange={handleCheckboxChange}
                />
                Média
              </label>
              <label>
                <input
                  type="checkbox"
                  name="dificil"
                  checked={dificuldades.dificil}
                  onChange={handleCheckboxChange}
                />
                Difícil
              </label>
            </div>
          </div>

          {/* Campo para Upload de Imagem */}
          <div className="form-group">
            <label htmlFor="imagem">Imagem (opcional)</label>
            <input
              type="file"
              id="imagem"
              name="imagem"
              onChange={handleImageChange}
            />
          </div>

          {/* Botão de Envio */}
          <button type="submit">Enviar Atividade</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default AtividadesAluno;
