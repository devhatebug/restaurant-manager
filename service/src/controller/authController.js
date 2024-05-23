const Users = require('../models/userModel');
require('dotenv').config();
const createToken = require('../middleware/jwtAction');

const logIn = async(req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ message: 'Vui lòng nhập tài khoản và mật khẩu' });
        }
        const user = await Users.findOne({ where: { username: username, pass: password } });
        if (!user) {
            return res.status(400).send({ message: 'Tài khoản hoặc mật khẩu không chính xác' });
        }
        if (user.roleUser !== 'admin') {
            return res.status(400).send({ message: 'Tài khoản hoặc mật khẩu không chính xác' });
        }
        const token = createToken(user);
        res.status(200).send({ token });
    }
    catch (err) {
        res.status(500).send({ message: 'Lỗi máy chủ', err });
        console.log(err);
    }
};

module.exports = {logIn};