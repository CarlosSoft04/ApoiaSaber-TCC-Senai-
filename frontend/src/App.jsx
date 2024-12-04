import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles/App.css'; // Arquivo de estilos

// Importando os componentes para as telas e funcionalidades específicas
import TelaProfessor from '../src/components/Professor/telaProfessor'; 
import CadastrarAluno from '../src/components/Professor/cadastrar-aluno'; 
import Atividades from '../src/components/Professor/atividades'; 
import Relatorios from '../src/components/Professor/relatorios'; 

import TelaAluno from '../src/components/Aluno/telaAluno'; // Importe a TelaAluno
import AtividadesAluno from "../src/components/Aluno/atividadesAluno";

// Componente principal (App)
function App() {
  const [isSignUp, setIsSignUp] = useState(true); 
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp); 
  };

  const handleSignin = () => {
    navigate('/telaProfessor');
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
      {/* Formulário de Cadastro */}
      {isSignUp ? (
        <div className="form-container sign-up">
          <form>
            <h1>Criar conta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span style={{ fontSize: '18px' }}>ou use o email para se registrar</span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      ) : (
        /* Formulário de Login */
        <div className="form-container sign-in">
          <form>
            <h1 style={{ fontSize: '40px' }}>Entrar</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span style={{ fontSize: '18px' }} >ou use a senha do seu email</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#" style={{ fontSize: '15px' }}>Esqueci minha senha</a>
            <button type="button" onClick={handleSignin}>Entrar</button>
          </form>
        </div>
      )}

      {/* Toggle para alternar entre login e cadastro */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 style={{ fontSize: '35px' }}>Bem-vindo de volta!</h1>
            <p style={{ fontSize: '18px' }}>Acesse sua conta agora mesmo e acesse o <strong>ApoiaSaber</strong> </p>
            <button className="hidden" onClick={handleToggle}>Entrar</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 style={{ fontSize: '35px' }}>ApoiaSaber</h1>
            <p style={{ fontSize: '18px' }}>Se cadastre como aluno ou professor e acesse o  <strong>ApoiaSaber</strong> </p>
            <button className="hidden" onClick={handleToggle} >Aluno</button>
            <button className="hidden" onClick={handleToggle}>Professor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente AppWithRouter para configurar as rotas
export default function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Rota principal para login/cadastro */}
        <Route path="/telaProfessor" element={<TelaProfessor />} /> {/* Rota para a tela do professor */}
        <Route path="/cadastrar-aluno" element={<CadastrarAluno />} /> {/* Rota para cadastro do aluno */}
        <Route path="/atividades" element={<Atividades />} /> {/* Rota para atividades */}
        <Route path="/relatorios" element={<Relatorios />} /> {/* Rota para relatórios */}
        <Route path="/telaAluno" element={<TelaAluno />} /> {/* Rota para a tela do aluno */}
        <Route path="/atividadesAlunos" element={<AtividadesAluno />} /> {/* Rota para a tela do aluno */}
      </Routes>
    </Router>
  );
}
