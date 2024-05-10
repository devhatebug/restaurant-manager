const Menu = require('../config/database');

// hien thi data menu
const getMenu = async (req, res) => {
    try {
        const users = await Menu.findAll();
        res.send(users);
    } catch(err) {
        console.error((err))
        res.send("loi"); 
    }
}

// hien thi data item theo id
const getMenuByID = async (req,res) => {
    let idItem = req.params.idItem;
    try {
       const menuSelector = await Menu.findAll(
            {
                where : {id: idItem}
            }
        )
        res.send({item: menuSelector});
    }
    catch(err) {
        console.log(err);
        res.send('Try !');
    }
}


//them data menu
const addMenu = async(req, res) => {
    let {code, name, img, classify,endow, isnew, ishot, isseller, feedback, status, price} = req.body;
    try {
        await Menu.create(
            {
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
       )
        res.send('Create successfuly');
    }
    catch(err) {
        console.error(err);
        res.send("Try !")
    }
}

// chinh sua data menu
const updateMenu = async (req, res) => {
    let {code, name, img, classify,endow, isnew, ishot, isseller, feedback, status,price,idItem} = req.body;
    try {
        await Menu.update(
            {
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
            },
            {
                where : {id: idItem}
            }
       )
        res.send("Update successfully");
    }
    catch(err) {
        console.log(err)
        res.send("Loi");
    }
}

// xoa data item 
const deleteItemMenu = async(req, res) => {
    const idItem = req.params.idItem;
    try {
        await Menu.destroy({
            where: {id: idItem}
        })
        res.send("Delete Successfully");
    }
    catch(err) {
        console.log(err);
        res.send("Loi !");
    }
}

module.exports = {getMenu, getMenuByID, addMenu, updateMenu, deleteItemMenu}