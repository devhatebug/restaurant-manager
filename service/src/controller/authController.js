const Users = require('../models/userModel');
require('dotenv').config();
const createToken = require('../middleware/jwtAction');

const logIn = async(req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).send({message : 'Vui lòng nhập tài khoản và mật khẩu'})
        }
        const findUserName = await Users.findOne({where: {username: username}});
        if(!findUserName) {
            return res.status(400).send({message: 'Tài khoản hoặc mật khẩu không chính xác'});
        }

        const finePass = await Users.findOne({where: {pass: password}});
        if(!finePass) {
            return res.status(400).send({message: 'Tài khoản hoặc mật khẩu không chính xác'});
        }

        const token = createToken(Users);
        res.status(200).send({token});
    }
    catch(err) {
        res.status(500).send({message: 'Lỗi máy chủ', err})
        console.log(err)
    }
}

module.exports = {logIn};