const express = require("express");
const router = express.Router();
const { getAllOrders, addOrder, getOrderById, getOrderLimit, updateOrder, deleteOrder } = require("../controller/ordersController");
const { route } = require("./ordersApi");
router.get("/orders", getAllOrders);
router.post("/add-order", addOrder);
router.get("/order", getOrderLimit);
router.get("/order/:idItem", getOrderById);
router.put("/update-order", updateOrder);
router.delete('/delete-order/:idItem', deleteOrder)
module.exports = router;
