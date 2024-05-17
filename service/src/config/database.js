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

module.exports = connection;