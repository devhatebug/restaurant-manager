const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      roleUser: user.roleUser,
      cart: user.cart,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = createToken;
