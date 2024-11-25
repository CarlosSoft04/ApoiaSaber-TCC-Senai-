import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Importar os ícones necessários
import "./App.css"; // Arquivo de estilos

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
      {/* Formulário de Cadastro */}
      {isSignUp ? (
        <div className="form-container sign-up">
          <form>
            <h1>Criar conta</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>ou use o email para se registrar</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      ) : (
        /* Formulário de Login */
        <div className="form-container sign-in">
          <form>
            <h1>Entrar</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>ou use a senha do seu email</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueci minha senha</a>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}

      {/* Toggle para alternar entre login e cadastro */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bem vindo de volta!</h1>
            <p>Acesse sua conta agora mesmo e acesse o <strong>ApoiaSaber</strong> </p>
            <button className="hidden" onClick={handleToggle}>Entrar</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>ApoiaSaber</h1>
            <p>Se cadastre como aluno ou professor e acesse o  <strong>ApoiaSaber</strong> </p>
            <button className="hidden" onClick={handleToggle}>Aluno</button>
            <button className="hidden" onClick={handleToggle}>Professor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
