const orders = require("../models/ordersModel");
const {
  getData,
  getDataById,
  getDataLimit,
  addData,
  updateData,
  deleteData,
} = require("../utils/crud");
const getAllOrders = (req, res) => {
  getData(req, res, orders);
};

const addOrder = (req, res) => {
  const { name, img, price, status, dispatch, note, nameClient, phoneClient } =
    req.body;
  const dataNewOrder = {
    nameOrder: name,
    img: img,
    price: price,
    statusOrder: status,
    dispatch: dispatch,
    noteOrder: note,
    nameClient: nameClient,
    phoneClient: phoneClient,
  };
  addData(req, res, orders, dataNewOrder);
};
const getOrderById = (req, res) => {
  const idItem = req.params.idItem;
  getDataById(req, res, orders, idItem);
};
const getOrderLimit = (req, res) => {
  const {offset, limit } = req.query;
  getDataLimit(req, res, orders, limit, offset);
};
const updateOrder = (req, res) => {
  const {
    nameOrder,
    price,
    status,
    dispatch,
    note,
    nameClient,
    phoneClient,
    img,
    idItem,
  } = req.body;
  const dataUpdate = {
    nameOrder: nameOrder,
    price: price,
    statusOrder: status,
    dispatch: dispatch,
    noteOrder: note,
    nameClient: nameClient,
    phoneClient: phoneClient,
    img: img,
  };
  updateData(req, res, orders, dataUpdate, idItem);
};
const deleteOrder = (req, res) => {
  const idItem = req.params.idItem;
  deleteData(req, res,orders, idItem);
};

module.exports = {
  getAllOrders,
  addOrder,
  getOrderById,
  getOrderLimit,
  updateOrder,
  deleteOrder,
};
