const express = require('express');
const route = express.Router();
const {getAllUsers, getUserById, getUserLimit, addUser, editUser, deleteUser} = require('../controller/usersController');

route.get('/users', getAllUsers);
route.get('/user', getUserLimit)
route.get('/users/:idUser', getUserById);
route.post('/add-users', addUser);
route.put('/update-user', editUser);
route.delete('/delete-user/:idUser', deleteUser);

module.exports = route;