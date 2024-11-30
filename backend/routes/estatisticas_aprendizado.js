// routes/estatisticas_aprendizado.js
const express = require('express');
const router = express.Router();
const EstatisticaAprendizado = require('../models/estatisticas_aprendizado'); // Importe o modelo de estatísticas de aprendizado

// Criar uma estatística de aprendizado
router.post('/', async (req, res) => {
  try {
    const { id_turma, id_atividade, media_tempo_gasto, dificuldade_media, taxa_conclusao } = req.body;
    const novaEstatistica = await EstatisticaAprendizado.create({
      id_turma,
      id_atividade,
      media_tempo_gasto,
      dificuldade_media,
      taxa_conclusao,
    });
    return res.status(201).json({ message: 'Estatística de aprendizado criada com sucesso!', estatistica: novaEstatistica });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar a estatística de aprendizado.' });
  }
});

// Listar todas as estatísticas de aprendizado
router.get('/', async (req, res) => {
  try {
    const estatisticas = await EstatisticaAprendizado.findAll();
    return res.status(200).json(estatisticas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar as estatísticas de aprendizado.' });
  }
});

// Obter uma estatística específica
router.get('/:id', async (req, res) => {
  try {
    const estatistica = await EstatisticaAprendizado.findByPk(req.params.id);
    if (!estatistica) return res.status(404).json({ error: 'Estatística não encontrada.' });
    return res.status(200).json(estatistica);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar a estatística.' });
  }
});

// Atualizar uma estatística de aprendizado
router.put('/:id', async (req, res) => {
  try {
    const estatistica = await EstatisticaAprendizado.findByPk(req.params.id);
    if (!estatistica) return res.status(404).json({ error: 'Estatística não encontrada.' });
    
    const { media_tempo_gasto, dificuldade_media, taxa_conclusao } = req.body;
    await estatistica.update({ media_tempo_gasto, dificuldade_media, taxa_conclusao });
    return res.status(200).json({ message: 'Estatística de aprendizado atualizada com sucesso!', estatistica });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar a estatística de aprendizado.' });
  }
});

// Deletar uma estatística
router.delete('/:id', async (req, res) => {
  try {
    const estatistica = await EstatisticaAprendizado.findByPk(req.params.id);
    if (!estatistica) return res.status(404).json({ error: 'Estatística não encontrada.' });
    await estatistica.destroy();
    return res.status(200).json({ message: 'Estatística de aprendizado deletada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar a estatística de aprendizado.' });
  }
});

module.exports = router;
