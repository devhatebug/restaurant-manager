const connection = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");

const orders = connection.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nameOrder: { type: DataTypes.STRING, allowNull: false },
    inforOrder: { type: DataTypes.JSON, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    statusOrder: { type: DataTypes.STRING, allowNull: false },
    formOrder: { type: DataTypes.STRING, allowNull: false },
    dispatch: { type: DataTypes.STRING, allowNull: false },
    noteOrder: { type: DataTypes.STRING },
  },
  { tableName: "orders", timestamps: false }
);

module.exports = orders;
