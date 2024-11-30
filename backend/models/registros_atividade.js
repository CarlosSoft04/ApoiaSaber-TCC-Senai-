// models/RegistrosAtividade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');
const Atividades = require('./Atividades');

const RegistrosAtividade = sequelize.define('RegistrosAtividade', {
  id_registro: {
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
  tempo_gasto: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  data_entrega: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'registros_atividade',
  timestamps: false,
});

RegistrosAtividade.belongsTo(Usuarios, { foreignKey: 'id_aluno' });
RegistrosAtividade.belongsTo(Atividades, { foreignKey: 'id_atividade' });

module.exports = RegistrosAtividade;
