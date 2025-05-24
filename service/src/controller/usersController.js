const mysql = require('mysql2/promise')
const Users = require('../models/userModel');
const {getData, getDataById, getDataLimit, addData, updateData, deleteData} = require('../utils/crud');
const ImageKit = require('../config/imageKit');

const getAllUsers = (req, res) => {
    getData(req, res, Users)
}

const getUserById = (req, res) => {
    const idUser = req.params.idUser;
    getDataById(req,res,Users,idUser);
}

const getUserLimit = (req, res) => {
    const {offset, limit} = req.query;
    getDataLimit(req, res, Users, limit, offset);
}

const addUser = async (req, res) => {
    const {codeUser, name, username, pass, address, phone, role} = req.body;

    try {
        let imageUrl = 'https://github.com/benjamincanac.png'; // Default image

        // Check if file was uploaded
        if (req.file) {
            const uploadResponse = await ImageKit.upload({
                file: req.file.buffer,
                fileName: `${codeUser}-${name}.jpg`,
                folder: '/users'
            });
            imageUrl = uploadResponse.url;
        }

        const dataNewUser = {
            codeUser: codeUser,
            nameUser: name,
            avtUser: imageUrl,
            username: username,
            pass: pass,
            address: address,
            phone: phone,
            roleUser: role,
        }

        addData(req, res, Users, dataNewUser);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Error adding user");
    }
}

const editUser = async (req, res) => {
  try {
    console.log('File:', req.file); // Kiểm tra file upload
    console.log('Body:', req.body); // Kiểm tra các field khác

    const {
      codeUser,
      name,
      username,
      pass,
      address,
      phone,
      role,
      cart,
      idUser,
      currentAvt
    } = req.body;

    if (!idUser) {
      return res.status(400).json({ error: "Thiếu ID người dùng" });
    }

    let imageUrl = currentAvt || 'https://github.com/benjamincanac.png';

    if (req.file) {
      const uploadResponse = await ImageKit.upload({
        file: req.file.buffer,
        fileName: `${codeUser}-${name}.jpg`,
        folder: '/users'
      });
      imageUrl = uploadResponse.url;
    }

    const dataUpdateUser = {
      codeUser: codeUser,
      nameUser: name,
      avtUser: imageUrl,
      username: username,
      pass: pass,
      address: address,
      phone: phone,
      roleUser: role,
      cart: cart
    }

    await updateData(req, res, Users, dataUpdateUser, idUser);
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    res.status(500).json({ error: "Lỗi khi cập nhật người dùng" });
  }
}

const deleteUser = (req, res) => {
    const idUser = req.params.idUser;
    deleteData(req, res, Users, idUser);
}

module.exports = {getAllUsers, getUserById, getUserLimit, addUser, editUser, deleteUser}
