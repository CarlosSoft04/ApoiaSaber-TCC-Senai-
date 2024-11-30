// routes/anexos.js
const express = require('express');
const router = express.Router();
const Anexo = require('../models/anexos'); // Importe o modelo de anexo

// Criar um anexo
router.post('/', async (req, res) => {
  try {
    const { id_usuario, id_atividade, url_anexo } = req.body;
    const novoAnexo = await Anexo.create({
      id_usuario,
      id_atividade,
      url_anexo,
    });
    return res.status(201).json({ message: 'Anexo criado com sucesso!', anexo: novoAnexo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar o anexo.' });
  }
});

// Listar todos os anexos
router.get('/', async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    return res.status(200).json(anexos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar os anexos.' });
  }
});

// Obter um anexo específico
router.get('/:id', async (req, res) => {
  try {
    const anexo = await Anexo.findByPk(req.params.id);
    if (!anexo) return res.status(404).json({ error: 'Anexo não encontrado.' });
    return res.status(200).json(anexo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar o anexo.' });
  }
});

// Atualizar um anexo
router.put('/:id', async (req, res) => {
  try {
    const anexo = await Anexo.findByPk(req.params.id);
    if (!anexo) return res.status(404).json({ error: 'Anexo não encontrado.' });
    
    const { url_anexo } = req.body;
    await anexo.update({ url_anexo });
    return res.status(200).json({ message: 'Anexo atualizado com sucesso!', anexo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o anexo.' });
  }
});

// Deletar um anexo
router.delete('/:id', async (req, res) => {
  try {
    const anexo = await Anexo.findByPk(req.params.id);
    if (!anexo) return res.status(404).json({ error: 'Anexo não encontrado.' });
    await anexo.destroy();
    return res.status(200).json({ message: 'Anexo deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar o anexo.' });
  }
});

module.exports = router;
