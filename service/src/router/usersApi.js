const express = require('express');
const route = express.Router();
const {getAllUsers, getUserById, addUser, editUser, deleteUser} = require('../controller/usersController');

route.get('/users', getAllUsers);
route.get('/users/:idUser', getUserById);
route.post('/add-users', addUser);
route.put('/update-user', editUser);
route.delete('/delete-user/:idUser', deleteUser);

module.exports = route;