const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const connection = new Sequelize(
  'restaurantmanager', // name database
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port : process.env.DB_PORT, 
  }
);

const Menu = connection.define('menu', {
  id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  codeItem: {type: DataTypes.STRING, allowNull: false},
  nameItem: {type: DataTypes.STRING, allowNull: false},
  imgItem: {type: DataTypes.BLOB},
  classify: {type: DataTypes.STRING,allowNull: false},
  endow: {type: DataTypes.INTEGER},
  isNew: {type: DataTypes.BOOLEAN},
  isHot: {type: DataTypes.BOOLEAN},
  isSeller: {type: DataTypes.BOOLEAN,},
  feedback: {type: DataTypes.INTEGER},
  statusItem: {type:DataTypes.BOOLEAN, allowNull:false},
  price: {type:DataTypes.INTEGER, allowNull:false},
},{tableName: 'menu', timestamps: false})

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
},{tableName: 'users', timestamps: false})

module.exports = {Menu, Users};