const express = require('express');
const route = express.Router();
const authLogin = require('../controller/authController');

route.post('/login', authLogin);

module.exports = route;