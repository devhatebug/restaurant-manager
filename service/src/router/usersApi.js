const express = require('express');
const route = express.Router();
const {getAllUsers, getUserById, getUserLimit, addUser, editUser, deleteUser} = require('../controller/usersController');
const upload = require('../middleware/upload');

route.get('/users', getAllUsers);
route.get('/user', getUserLimit)
route.get('/users/:idUser', getUserById);
route.post('/add-users', upload, addUser);
route.put('/update-user', upload, editUser);
route.delete('/delete-user/:idUser', deleteUser);

module.exports = route;
