const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuarios = sequelize.define('Usuarios', {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_completo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  foto_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  sexo: {
    type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro', 'Não informar'),
    defaultValue: 'Não informar',
  },
  tipo_usuario: {
    type: DataTypes.ENUM('Aluno', 'Professor', 'Administrador'),
    defaultValue: 'Aluno',
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuarios;
