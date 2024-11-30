// models/EstatisticasAprendizado.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Turmas = require('./Turmas');
const Atividades = require('./Atividades');

const EstatisticasAprendizado = sequelize.define('EstatisticasAprendizado', {
  id_estatistica: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  id_atividade: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'atividades',
      key: 'id_atividade',
    },
    onDelete: 'CASCADE',
  },
  media_tempo_gasto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  dificuldade_media: {
    type: DataTypes.ENUM('Fácil', 'Médio', 'Difícil'),
    allowNull: true,
  },
  taxa_conclusao: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
}, {
  tableName: 'estatisticas_aprendizado',
  timestamps: false,
});

EstatisticasAprendizado.belongsTo(Turmas, { foreignKey: 'id_turma' });
EstatisticasAprendizado.belongsTo(Atividades, { foreignKey: 'id_atividade' });

module.exports = EstatisticasAprendizado;
