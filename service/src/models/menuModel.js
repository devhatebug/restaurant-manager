const connection = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');

const Menu = connection.define('menu', {
  id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  codeItem: {type: DataTypes.STRING, allowNull: false},
  nameItem: {type: DataTypes.STRING, allowNull: false},
  imgItem: {type: DataTypes.BLOB("long")},
  classify: {type: DataTypes.STRING,allowNull: false},
  endow: {type: DataTypes.INTEGER},
  isNew: {type: DataTypes.BOOLEAN},
  isHot: {type: DataTypes.BOOLEAN},
  isSeller: {type: DataTypes.BOOLEAN,},
  feedback: {type: DataTypes.JSON},
  statusItem: {type:DataTypes.BOOLEAN, allowNull:false},
  price: {type:DataTypes.INTEGER, allowNull:false},
},{tableName: 'menu', timestamps: false})

module.exports = Menu;
