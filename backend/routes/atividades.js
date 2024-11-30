const express = require('express');
const router = express.Router();
const Atividades = require('../models/atividades');


router.post('/', async (req, res) => {
  try {
    const { id_professor, titulo, descricao, data_atividade, dificuldade } = req.body;

    if (!titulo || !descricao || !data_atividade || !dificuldade) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    const novaAtividade = await Atividades.create({
      id_professor,
      titulo,
      descricao,
      data_atividade,
      dificuldade,
    });

    return res.status(201).json({
      message: 'Atividade criada com sucesso!',
      atividade: novaAtividade,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar atividade.' });
  }
});


router.get('/', async (req, res) => {
  try {
    const atividades = await Atividades.findAll();
    return res.status(200).json(atividades);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar atividades.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const atividade = await Atividades.findByPk(id);

    if (!atividade) {
      return res.status(404).json({ error: 'Atividade não encontrada.' });
    }

    return res.status(200).json(atividade);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao obter a atividade.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { id_professor, titulo, descricao, data_atividade, dificuldade } = req.body;

    const atividade = await Atividades.findByPk(id);
    if (!atividade) {
      return res.status(404).json({ error: 'Atividade não encontrada.' });
    }

    await atividade.update({
      id_professor,
      titulo,
      descricao,
      data_atividade,
      dificuldade,
    });

    return res.status(200).json({
      message: 'Atividade atualizada com sucesso!',
      atividade: atividade,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar atividade.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const atividade = await Atividades.findByPk(id);

    if (!atividade) {
      return res.status(404).json({ error: 'Atividade não encontrada.' });
    }

    // Deletando a atividade
    await atividade.destroy();

    return res.status(200).json({
      message: 'Atividade deletada com sucesso!',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar atividade.' });
  }
});

module.exports = router;
