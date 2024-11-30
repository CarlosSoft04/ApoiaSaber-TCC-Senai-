// models/Engajamento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');

const Engajamento = sequelize.define('Engajamento', {
  id_engajamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  },
  tipo: {
    type: DataTypes.ENUM('Pergunta', 'Resposta', 'Reação'),
    allowNull: false,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_interacao: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'engajamento',
  timestamps: false,
});

Engajamento.belongsTo(Usuarios, { foreignKey: 'id_usuario' });

module.exports = Engajamento;
