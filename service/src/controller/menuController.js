const mysql = require('mysql2/promise')
const Menu = require('../models/menuModel');
const {getData, getDataById, addData, updateData, deleteData, getDataLimit} = require('../utils/crud');
const ImageKit = require('../config/imageKit');

// Hiển thị data menu
const getMenu = (req, res) => {
    getData(req, res, Menu)
}

// Hiển thị data item theo id
const getMenuByID = (req,res) => {
    const idItem = req.params.idItem;
    getDataById(req, res, Menu, idItem);
}

// Hiển thị menu theo trang
const getMenuLimit = (req, res) => {
    const {offset, limit} = req.query;
    getDataLimit(req, res, Menu, limit, offset);
}

// Thêm data menu
const addMenu = async (req, res) => {
    try {
        const {code, name, classify, endow, isnew, ishot, isseller, feedback, status, price} = req.body;

        // Validate required fields
        if (!code || !name || !price) {
            return res.status(400).json({message: 'Code, name and price are required'});
        }

        let imgUrl = 'https://static.thenounproject.com/png/1077596-200.png';

        // Nếu có file upload
        if (req.file) {
            try {
                const uploadedImg = await ImageKit.upload({
                    file: req.file.buffer.toString('base64'),
                    fileName: req.file.originalname, // Sửa từ originalName -> originalname
                    folder: '/menu',
                });
                imgUrl = uploadedImg.url;
            } catch (imageKitError) {
                console.error('ImageKit upload error:', imageKitError);
                // Vẫn tiếp tục với imgUrl mặc định nếu upload thất bại
            }
        }

        const newMenu = {
            codeItem: code,
            nameItem: name,
            imgItem: imgUrl,
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
    } catch (error) {
        console.error('Error in addMenu:', error);
        res.status(500).json({message: 'Server error'});
    }
}

// Chỉnh sửa data menu
const updateMenu = async (req, res) => {
    try {
        const {code, name, classify, endow, isnew, ishot, isseller, feedback, status, price, idItem} = req.body;

        if (!idItem) {
            return res.status(400).json({message: 'idItem is required'});
        }

        let imgUrl;

        // Nếu có file upload mới
        if (req.file) {
            try {
                const uploadedImg = await ImageKit.upload({
                    file: req.file.buffer.toString('base64'),
                    fileName: req.file.originalname,
                    folder: '/menu',
                });
                imgUrl = uploadedImg.url;
            } catch (imageKitError) {
                console.error('ImageKit upload error:', imageKitError);
                // Không thay đổi ảnh nếu upload thất bại
                imgUrl = undefined;
            }
        }

        const dataUpdate = {
            codeItem: code,
            nameItem: name,
            ...(imgUrl && {imgItem: imgUrl}), // Chỉ cập nhật imgItem nếu có imgUrl
            classify: classify,
            endow: endow,
            isNew: isnew,
            isHot: ishot,
            isSeller: isseller,
            feedback: feedback,
            statusItem: status,
            price: price,
        }

        updateData(req, res, Menu, dataUpdate, idItem);
    } catch (error) {
        console.error('Error in updateMenu:', error);
        res.status(500).json({message: 'Server error'});
    }
}

// Xóa data item
const deleteItemMenu = async(req, res) => {
    const idItem = req.params.idItem;
    deleteData(req, res, Menu, idItem);
}

module.exports = {getMenu, getMenuByID, getMenuLimit, addMenu, updateMenu, deleteItemMenu};
