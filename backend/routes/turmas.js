// routes/turmas.js
const express = require('express');
const router = express.Router();
const Turma = require('../models/turmas'); // Importe o modelo da turma

// Criar uma turma
router.post('/', async (req, res) => {
  try {
    const { nome_turma, descricao } = req.body;
    const novaTurma = await Turma.create({ nome_turma, descricao });
    return res.status(201).json({ message: 'Turma criada com sucesso!', turma: novaTurma });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar a turma.' });
  }
});

// Listar todas as turmas
router.get('/', async (req, res) => {
  try {
    const turmas = await Turma.findAll();
    return res.status(200).json(turmas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar as turmas.' });
  }
});

// Obter uma turma específica
router.get('/:id', async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) return res.status(404).json({ error: 'Turma não encontrada.' });
    return res.status(200).json(turma);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar a turma.' });
  }
});

// Atualizar uma turma
router.put('/:id', async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) return res.status(404).json({ error: 'Turma não encontrada.' });
    
    const { nome_turma, descricao } = req.body;
    await turma.update({ nome_turma, descricao });
    return res.status(200).json({ message: 'Turma atualizada com sucesso!', turma });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar a turma.' });
  }
});

// Deletar uma turma
router.delete('/:id', async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);
    if (!turma) return res.status(404).json({ error: 'Turma não encontrada.' });
    await turma.destroy();
    return res.status(200).json({ message: 'Turma deletada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar a turma.' });
  }
});

module.exports = router;
