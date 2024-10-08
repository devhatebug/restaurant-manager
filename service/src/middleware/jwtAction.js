const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      roleUser: user.roleUser,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = createToken;
