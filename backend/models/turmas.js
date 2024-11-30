// models/Turmas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Turmas = sequelize.define('Turmas', {
  id_turma: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_turma: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'turmas',
  timestamps: false,
});

module.exports = Turmas;
