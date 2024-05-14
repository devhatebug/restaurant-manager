const mysql = require('mysql2/promise')
const {Users} = require('../config/database');
const {getData, getDataById, addData, updateData, deleteData} = require('../utils/crud');

const getAllUsers = (req, res) => {
    getData(req, res, Users)
}

const getUserById = (req, res) => {
    const idUser = req.params.idUser;
    getDataById(req,res,Users,idUser);
}

const addUser = (req, res) => {
    const {codeUser, name, avt, username, pass, address, phone, role} = req.body;
    const dataNewUser = {
        codeUser: codeUser,
        nameUser: name,
        avtUser: avt,
        username: username,
        pass: pass,
        address: address,
        phone: phone,
        roleUser: role,
    }
    addData(req, res, Users, dataNewUser);
}

const editUser = (req, res) => {
    const {codeUser, name, avt, username, pass, address, phone, role, idUser} = req.body;
    const dataUpdateUser = {
        codeUser: codeUser,
        nameUser: name,
        avtUser: avt,
        username: username,
        pass: pass,
        address: address,
        phone: phone,
        roleUser: role,
    }
    updateData(req, res, Users, dataUpdateUser, idUser)
}

const deleteUser = (req, res) => {
    const idUser = req.params.idUser;
    deleteData(req, res, Users, idUser);
}

module.exports = {getAllUsers, getUserById, addUser, editUser, deleteUser}