const mysql = require('mysql2/promise')
const Menu = require('../models/menuModel');
const {getData, getDataById, addData, updateData, deleteData, getDataLimit} = require('../utils/crud');

// hien thi data menu
const getMenu = (req, res) => {
    getData(req, res, Menu)
}

// hien thi data item theo id
const getMenuByID = (req,res) => {
    const idItem = req.params.idItem;
    getDataById(req, res, Menu, idItem);
}

// hien thi menu theo trang
const getMenuLimit = (req, res) => {
    const {offset, limit} = req.query;
    getDataLimit(req, res, Menu, limit, offset);
}

//them data menu
const addMenu = (req, res) => {
    const {code, name, img, classify,endow, isnew, ishot, isseller, feedback, status, price} = req.body;
    const newMenu = {
        codeItem: code,
        nameItem: name,
        imgItem: img,
        classify: classify,
        endow: endow,
        isNew: isnew,
        isHot: ishot,
        isSeller: isseller,
        feedback: feedback,
        statusItem: status,
        price: price,
    }
    addData(req, res, Menu, newMenu);
}

// chinh sua data menu
const updateMenu = async (req, res) => {
    const {code, name, img, classify,endow, isnew, ishot, isseller, feedback, status,price,idItem} = req.body;
    const dataUpdate = {
        codeItem: code,
        nameItem: name,
        imgItem: img,
        classify: classify,
        endow: endow,
        isNew: isnew,
        isHot: ishot,
        isSeller: isseller,
        feedback: feedback,
        statusItem: status,
        price: price,
    }
    updateData(req, res, Menu, dataUpdate, idItem)
}

// xoa data item 
const deleteItemMenu = async(req, res) => {
    const idItem = req.params.idItem;
    deleteData(req, res, Menu, idItem)
}

module.exports = {getMenu, getMenuByID, getMenuLimit, addMenu, updateMenu, deleteItemMenu}