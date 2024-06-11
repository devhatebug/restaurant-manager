const orders = require('../models/ordersModel');
const {getData, getDataById, getDataLimit, addData, updateData, deleteData} = require('../utils/crud');

const getAllOrders = (req, res) => {
    getData(req, res, orders);
}

const addOrder = (req, res) => {
    const {name, infor, price, status, formOrder, dispatch, note} = req.body;
    const dataNewOrder = {
      nameOrder: name,
      inforOrder: infor,
      price: price,
      statusOrder: status,
      formOrder: formOrder,
      dispatch: dispatch,
      noteOrder: note,
    };
    addData(req, res, orders, dataNewOrder);
}

module.exports = {getAllOrders, addOrder}