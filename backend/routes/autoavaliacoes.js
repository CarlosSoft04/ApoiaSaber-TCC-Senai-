// routes/autoavaliacoes.js
const express = require('express');
const router = express.Router();
const Autoavaliacao = require('../models/autoavaliacoes'); // Importe o modelo de autoavaliação

// Criar uma autoavaliação
router.post('/', async (req, res) => {
  try {
    const { id_atividade, id_aluno, dificuldade_percebida, tempo_estimado, comentario } = req.body;
    const novaAutoavaliacao = await Autoavaliacao.create({
      id_atividade,
      id_aluno,
      dificuldade_percebida,
      tempo_estimado,
      comentario,
    });
    return res.status(201).json({ message: 'Autoavaliação criada com sucesso!', autoavaliacao: novaAutoavaliacao });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar a autoavaliação.' });
  }
});

// Listar todas as autoavaliações
router.get('/', async (req, res) => {
  try {
    const autoavaliacoes = await Autoavaliacao.findAll();
    return res.status(200).json(autoavaliacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar as autoavaliações.' });
  }
});

// Obter uma autoavaliação específica
router.get('/:id', async (req, res) => {
  try {
    const autoavaliacao = await Autoavaliacao.findByPk(req.params.id);
    if (!autoavaliacao) return res.status(404).json({ error: 'Autoavaliação não encontrada.' });
    return res.status(200).json(autoavaliacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar a autoavaliação.' });
  }
});

// Atualizar uma autoavaliação
router.put('/:id', async (req, res) => {
  try {
    const autoavaliacao = await Autoavaliacao.findByPk(req.params.id);
    if (!autoavaliacao) return res.status(404).json({ error: 'Autoavaliação não encontrada.' });
    
    const { dificuldade_percebida, tempo_estimado, comentario } = req.body;
    await autoavaliacao.update({ dificuldade_percebida, tempo_estimado, comentario });
    return res.status(200).json({ message: 'Autoavaliação atualizada com sucesso!', autoavaliacao });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar a autoavaliação.' });
  }
});

// Deletar uma autoavaliação
router.delete('/:id', async (req, res) => {
  try {
    const autoavaliacao = await Autoavaliacao.findByPk(req.params.id);
    if (!autoavaliacao) return res.status(404).json({ error: 'Autoavaliação não encontrada.' });
    await autoavaliacao.destroy();
    return res.status(200).json({ message: 'Autoavaliação deletada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar a autoavaliação.' });
  }
});

module.exports = router;
