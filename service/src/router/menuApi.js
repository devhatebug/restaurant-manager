const express = require('express');
const route = express.Router();
const {getMenu, getMenuByID, getMenuLimit, addMenu, updateMenu, deleteItemMenu} = require('../controller/menuController');

route.get('/menu', getMenu);
route.get('/products', getMenuLimit);
route.post('/add-menu', addMenu);
route.get('/menu/:idItem', getMenuByID);
route.put('/update-menu', updateMenu);
route.delete('/delete-menu/:idItem', deleteItemMenu);
module.exports = route;