const express = require('express');
const routes = express.Router();
const AlunosTurma = require('../models/alunos_turma');


routes.post('/', async (req, res) => {
    try {
      const { id_aluno, id_turma } = req.body;
      const novaAssociacao = await AlunosTurma.create({
        id_aluno,
        id_turma
      });
      return res.status(201).json(novaAssociacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar associação aluno-turma' });
    }
  });
  
  // 2. Obter todas as associações aluno-turma
  routes.get('/', async (req, res) => {
    try {
      const alunosTurma = await AlunosTurma.findAll();
      return res.status(200).json(alunosTurma);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar associações aluno-turma' });
    }
  });
  
  // 3. Obter uma associação específica aluno-turma (por ID)
  routes.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const alunoTurma = await AlunosTurma.findByPk(id);
      if (!alunoTurma) {
        return res.status(404).json({ error: 'Associação não encontrada' });
      }
      return res.status(200).json(alunoTurma);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar associação aluno-turma' });
    }
  });
  
  // 4. Atualizar uma associação aluno-turma
  routes.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { id_aluno, id_turma } = req.body;
  
      const alunoTurma = await AlunosTurma.findByPk(id);
      if (!alunoTurma) {
        return res.status(404).json({ error: 'Associação não encontrada' });
      }
  
      // Atualiza os campos da associação
      alunoTurma.id_aluno = id_aluno || alunoTurma.id_aluno;
      alunoTurma.id_turma = id_turma || alunoTurma.id_turma;
  
      await alunoTurma.save();
      return res.status(200).json(alunoTurma);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar associação aluno-turma' });
    }
  });
  
  // 5. Excluir uma associação aluno-turma
routes.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const alunoTurma = await AlunosTurma.findByPk(id);
      if (!alunoTurma) {
        return res.status(404).json({ error: 'Associação não encontrada' });
      }
  
      await alunoTurma.destroy();
      return res.status(200).json({ message: 'Associação aluno-turma excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao excluir associação aluno-turma' });
    }
  });


module.exports = routes;