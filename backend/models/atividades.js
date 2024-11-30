// models/Atividades.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios'); // Importa o modelo de usuarios

const Atividades = sequelize.define('Atividades', {
  id_atividade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_professor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios', 
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_atividade: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dificuldade: {
    type: DataTypes.ENUM('Fácil', 'Médio', 'Difícil'),
    allowNull: false,
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'atividades',
  timestamps: false,
});

Atividades.belongsTo(Usuarios, {
  foreignKey: 'id_professor',
  as: 'professor',
});

module.exports = Atividades;
