// models/Anexos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuarios = require('./Usuarios');
const Atividades = require('./Atividades');

const Anexos = sequelize.define('Anexos', {
  id_anexo: {
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
  id_atividade: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'atividades',
      key: 'id_atividade',
    },
    onDelete: 'CASCADE',
  },
  url_anexo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'anexos',
  timestamps: false,
});

Anexos.belongsTo(Usuarios, { foreignKey: 'id_usuario' });
Anexos.belongsTo(Atividades, { foreignKey: 'id_atividade' });

module.exports = Anexos;
