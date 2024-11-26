import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Para o ícone do envio de mensagem
import '../styles/mensagens.css'
// Componente de Chat
const Chat = ({ conversaCom }) => {
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');

  const handleEnviarMensagem = () => {
    if (novaMensagem.trim()) {
      setMensagens([...mensagens, { de: 'Professor', para: conversaCom, texto: novaMensagem }]);
      setNovaMensagem('');
    }
  };

  const handleNovaMensagemChange = (e) => {
    setNovaMensagem(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="header-chat">
        <h2>Conversando com: {conversaCom || 'Selecione um aluno ou turma'}</h2>
      </div>

      <div className="mensagens">
        {mensagens.map((msg, index) => (
          <div key={index} className={`mensagem ${msg.de === 'Professor' ? 'professor' : 'aluno'}`}>
            <p><strong>{msg.de}:</strong> {msg.texto}</p>
          </div>
        ))}
      </div>

      <div className="input-chat">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={novaMensagem}
          onChange={handleNovaMensagemChange}
        />
        <button onClick={handleEnviarMensagem}><FaPaperPlane /></button>
      </div>
    </div>
  );
};

// Componente de Nova Conversa
const NovaConversa = () => {
  const [alunoOuTurma, setAlunoOuTurma] = useState('');
  const [mostrarChat, setMostrarChat] = useState(false);

  const handleIniciarConversa = () => {
    if (alunoOuTurma) {
      setMostrarChat(true);
    }
  };

  return (
    <div className="nova-conversa-container">
      {!mostrarChat ? (
        <div className="iniciar-conversa">
          <h2>Iniciar uma nova conversa</h2>
          <select
            onChange={(e) => setAlunoOuTurma(e.target.value)}
            value={alunoOuTurma}
          >
            <option value="">Selecione um aluno ou a turma</option>
            <option value="turma">Turma</option>
            <option value="aluno1">Aluno 1</option>
            <option value="aluno2">Aluno 2</option>
            <option value="aluno3">Aluno 3</option>
          </select>
          <button onClick={handleIniciarConversa}>Iniciar Conversa</button>
        </div>
      ) : (
        <Chat conversaCom={alunoOuTurma} />
      )}
    </div>
  );
};

// Componente Principal App
function App() {
  return (
    <div className="App">
      <NovaConversa />
    </div>
  );
}

export default App;
