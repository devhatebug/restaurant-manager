const orders = require('../models/ordersModel');
const {getData, getDataById, getDataLimit, addData, updateData, deleteData} = require('../utils/crud');

const getAllOrders = (req, res) => {
    getData(req, res, orders);
}

const addOrder = (req, res) => {
    const {name, infor, price, status, formOrder, dispatch, note, nameClient, phoneClient} = req.body;
    const dataNewOrder = {
      nameOrder: name,
      inforOrder: infor,
      price: price,
      statusOrder: status,
      dispatch: dispatch,
      noteOrder: note,
      nameClient: nameClient,
      phoneClient: phoneClient,
    };
    addData(req, res, orders, dataNewOrder);
}

module.exports = {getAllOrders, addOrder}