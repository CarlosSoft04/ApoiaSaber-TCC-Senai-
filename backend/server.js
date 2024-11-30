const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const anexosRoutes = require('./routes/anexos');
const atividadesRoutes = require('./routes/atividades');
const avaliacaoRoutes = require('./routes/autoavaliacoes');
const dificuldadeRoutes = require('./routes/dificuldades');
const engajamentoRoutes = require('./routes/engajamento');
const estatisticaRoutes = require('./routes/estatisticas_aprendizado');
const registroRoutes = require('./routes/registros_atividade');
const turmasRoutes = require('./routes/turmas');
const usuarioRoutes = require('./routes/usuarios.js');
const alunoturmaRoutes = require('./routes/aluno_turma');

app.use('/usuarios', usuarioRoutes);
app.use('/alunoturma', alunoturmaRoutes);
app.use('/anexos',anexosRoutes);
app.use('/atividades', atividadesRoutes);
app.use('/avaliacao', avaliacaoRoutes);
app.use('/dificuldade', dificuldadeRoutes);
app.use('/engajamento', engajamentoRoutes);
app.use('/estatisticas', estatisticaRoutes);
app.use('/registro', registroRoutes);
app.use('/turmas',turmasRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
