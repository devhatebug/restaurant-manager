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
    nameOrder: { type: DataTypes.STRING},
    img: { type: DataTypes.BLOB},
    price: { type: DataTypes.INTEGER},
    statusOrder: { type: DataTypes.STRING},
    dispatch: { type: DataTypes.STRING},
    noteOrder: { type: DataTypes.STRING },
    nameClient: {type:DataTypes.STRING},
    phoneClient: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER}
  },
  { tableName: "orders", timestamps: false }
);

module.exports = orders;
