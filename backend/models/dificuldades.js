// models/Dificuldades.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');
const Atividades = require('./Atividades');

const Dificuldades = sequelize.define('Dificuldades', {
  id_dificuldade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  id_aluno: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  },
  dificuldade: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  grau: {
    type: DataTypes.ENUM('Baixa', 'Moderada', 'Alta'),
    allowNull: false,
  },
}, {
  tableName: 'dificuldades',
  timestamps: false,
});

Dificuldades.belongsTo(Usuarios, { foreignKey: 'id_aluno' });
Dificuldades.belongsTo(Atividades, { foreignKey: 'id_atividade' });

module.exports = Dificuldades;
