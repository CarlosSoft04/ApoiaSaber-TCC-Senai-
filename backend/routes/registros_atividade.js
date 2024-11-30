// routes/registros_atividade.js
const express = require('express');
const router = express.Router();
const RegistroAtividade = require('../models/registros_atividade'); // Importe o modelo de registro de atividade

// Criar um registro de atividade
router.post('/', async (req, res) => {
  try {
    const { id_atividade, id_aluno, tempo_gasto, feedback } = req.body;
    const novoRegistro = await RegistroAtividade.create({
      id_atividade,
      id_aluno,
      tempo_gasto,
      feedback,
    });
    return res.status(201).json({ message: 'Registro de atividade criado com sucesso!', registro: novoRegistro });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar o registro de atividade.' });
  }
});

// Listar todos os registros de atividade
router.get('/', async (req, res) => {
  try {
    const registros = await RegistroAtividade.findAll();
    return res.status(200).json(registros);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar os registros de atividade.' });
  }
});

// Obter um registro de atividade específico
router.get('/:id', async (req, res) => {
  try {
    const registro = await RegistroAtividade.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro de atividade não encontrado.' });
    return res.status(200).json(registro);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar o registro de atividade.' });
  }
});

// Atualizar um registro de atividade
router.put('/:id', async (req, res) => {
  try {
    const registro = await RegistroAtividade.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro de atividade não encontrado.' });
    
    const { tempo_gasto, feedback } = req.body;
    await registro.update({ tempo_gasto, feedback });
    return res.status(200).json({ message: 'Registro de atividade atualizado com sucesso!', registro });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o registro de atividade.' });
  }
});

// Deletar um registro de atividade
router.delete('/:id', async (req, res) => {
  try {
    const registro = await RegistroAtividade.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Registro de atividade não encontrado.' });
    await registro.destroy();
    return res.status(200).json({ message: 'Registro de atividade deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar o registro de atividade.' });
  }
});

module.exports = router;
