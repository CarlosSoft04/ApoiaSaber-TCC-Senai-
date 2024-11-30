// routes/engajamento.js
const express = require('express');
const router = express.Router();
const Engajamento = require('../models/engajamento');

// Criar um engajamento
router.post('/', async (req, res) => {
  try {
    const { id_usuario, tipo, conteudo } = req.body;
    const novoEngajamento = await Engajamento.create({ id_usuario, tipo, conteudo });
    return res.status(201).json({ message: 'Engajamento criado com sucesso!', engajamento: novoEngajamento });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar o engajamento.' });
  }
});

// Listar todos os engajamentos
router.get('/', async (req, res) => {
  try {
    const engajamentos = await Engajamento.findAll();
    return res.status(200).json(engajamentos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar os engajamentos.' });
  }
});

// Obter um engajamento específico
router.get('/:id', async (req, res) => {
  try {
    const engajamento = await Engajamento.findByPk(req.params.id);
    if (!engajamento) return res.status(404).json({ error: 'Engajamento não encontrado.' });
    return res.status(200).json(engajamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar o engajamento.' });
  }
});

// Atualizar um engajamento
router.put('/:id', async (req, res) => {
  try {
    const engajamento = await Engajamento.findByPk(req.params.id);
    if (!engajamento) return res.status(404).json({ error: 'Engajamento não encontrado.' });
    
    const { tipo, conteudo } = req.body;
    await engajamento.update({ tipo, conteudo });
    return res.status(200).json({ message: 'Engajamento atualizado com sucesso!', engajamento });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o engajamento.' });
  }
});

// Deletar um engajamento
router.delete('/:id', async (req, res) => {
  try {
    const engajamento = await Engajamento.findByPk(req.params.id);
    if (!engajamento) return res.status(404).json({ error: 'Engajamento não encontrado.' });
    await engajamento.destroy();
    return res.status(200).json({ message: 'Engajamento deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar o engajamento.' });
  }
});

module.exports = router;
