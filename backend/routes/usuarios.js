const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');

// Criar um usuário
router.post('/', async (req, res) => {
  try {
    const { nome_completo, email, senha, telefone, foto_url, sexo, tipo_usuario } = req.body;
    const novoUsuario = await Usuario.create({
      nome_completo,
      email,
      senha,
      telefone,
      foto_url,
      sexo,
      tipo_usuario,
    });
    return res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: novoUsuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
});

// Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar os usuários.' });
  }
});

// Obter um usuário específico
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado.' });
    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar o usuário.' });
  }
});

// Atualizar um usuário
router.put('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado.' });
    
    const { nome_completo, email, senha, telefone, foto_url, sexo, tipo_usuario } = req.body;
    await usuario.update({ nome_completo, email, senha, telefone, foto_url, sexo, tipo_usuario });
    return res.status(200).json({ message: 'Usuário atualizado com sucesso!', usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
});

// Deletar um usuário
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado.' });
    await usuario.destroy();
    return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar o usuário.' });
  }
});

module.exports = router;
