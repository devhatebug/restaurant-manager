const connection = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');

const Users = connection.define('users', {
  id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  codeUser: {type: DataTypes.STRING, allowNull: false},
  nameUser : {type:DataTypes.STRING, allowNull: false},
  avtUser : {type:DataTypes.BLOB},
  username: {type: DataTypes.STRING, allowNull:false},
  pass : {type:DataTypes.STRING, allowNull:false},
  address : {type:DataTypes.STRING, allowNull:false},
  phone : {type:DataTypes.STRING, allowNull:false},
  roleUser: {type: DataTypes.STRING, allowNull:false},
  cart: {type:DataTypes.JSON, allowNull:true}
},{tableName: 'users', timestamps: false})

module.exports = Users;