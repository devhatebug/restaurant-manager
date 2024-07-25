const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      roleUser: user.roleUser,
      avtUser: user.avtUser,
      cart: user.cart
    },
    process.env.JWT_SECRET
  );
};

module.exports = createToken;
