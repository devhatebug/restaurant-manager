const jwt = require('jsonwebtoken');
require('dotenv').config();
const createToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: '7day'
    });
};

module.exports = createToken;