const express = require('express');
const route = express.Router();
const {logIn} = require('../controller/authController');

route.post('/login', logIn);

module.exports = route;