// models/AlunosTurma.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');
const Turmas = require('./Turmas');

const AlunosTurma = sequelize.define('AlunosTurma', {
  id_aluno_turma: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  },
  id_turma: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'turmas',
      key: 'id_turma',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'alunos_turma',
  timestamps: false,
});

AlunosTurma.belongsTo(Usuarios, { foreignKey: 'id_aluno' });
AlunosTurma.belongsTo(Turmas, { foreignKey: 'id_turma' });

module.exports = AlunosTurma;
