// routes/dificuldades.js
const express = require('express');
const router = express.Router();
const Dificuldade = require('../models/dificuldades'); // Importe o modelo de dificuldade

// Criar uma dificuldade
router.post('/', async (req, res) => {
  try {
    const { id_atividade, id_aluno, dificuldade, grau } = req.body;
    const novaDificuldade = await Dificuldade.create({
      id_atividade,
      id_aluno,
      dificuldade,
      grau,
    });
    return res.status(201).json({ message: 'Dificuldade criada com sucesso!', dificuldade: novaDificuldade });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar a dificuldade.' });
  }
});

// Listar todas as dificuldades
router.get('/', async (req, res) => {
  try {
    const dificuldades = await Dificuldade.findAll();
    return res.status(200).json(dificuldades);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar as dificuldades.' });
  }
});

// Obter uma dificuldade específica
router.get('/:id', async (req, res) => {
  try {
    const dificuldade = await Dificuldade.findByPk(req.params.id);
    if (!dificuldade) return res.status(404).json({ error: 'Dificuldade não encontrada.' });
    return res.status(200).json(dificuldade);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar a dificuldade.' });
  }
});

// Atualizar uma dificuldade
router.put('/:id', async (req, res) => {
  try {
    const dificuldade = await Dificuldade.findByPk(req.params.id);
    if (!dificuldade) return res.status(404).json({ error: 'Dificuldade não encontrada.' });
    
    const { dificuldade: novaDificuldade, grau } = req.body;
    await dificuldade.update({ dificuldade: novaDificuldade, grau });
    return res.status(200).json({ message: 'Dificuldade atualizada com sucesso!', dificuldade });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar a dificuldade.' });
  }
});

// Deletar uma dificuldade
router.delete('/:id', async (req, res) => {
  try {
    const dificuldade = await Dificuldade.findByPk(req.params.id);
    if (!dificuldade) return res.status(404).json({ error: 'Dificuldade não encontrada.' });
    await dificuldade.destroy();
    return res.status(200).json({ message: 'Dificuldade deletada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar a dificuldade.' });
  }
});

module.exports = router;
