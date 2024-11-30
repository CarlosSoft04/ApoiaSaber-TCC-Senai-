// models/Autoavaliacoes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');
const Atividades = require('./Atividades');

const Autoavaliacoes = sequelize.define('Autoavaliacoes', {
  id_autoavaliacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_atividade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'atividades',
      key: 'id_atividade',
    },
    onDelete: 'CASCADE',
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  },
  dificuldade_percebida: {
    type: DataTypes.ENUM('Fácil', 'Médio', 'Difícil'),
    allowNull: false,
  },
  tempo_estimado: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_autoavaliacao: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'autoavaliacoes',
  timestamps: false,
});

Autoavaliacoes.belongsTo(Usuarios, { foreignKey: 'id_aluno' });
Autoavaliacoes.belongsTo(Atividades, { foreignKey: 'id_atividade' });

module.exports = Autoavaliacoes;
