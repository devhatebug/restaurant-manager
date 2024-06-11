const express = require("express");
const router = express.Router();
const { getAllOrders, addOrder } = require("../controller/ordersController");
router.get("/orders", getAllOrders);
router.post("/add-order", addOrder);
module.exports = router;
