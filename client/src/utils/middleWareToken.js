import React, { useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const middleWareToken = () => {
  const [isToken, setIsToken] = useState(false);
  const { token } = Cookies.get("tokenUser");
  if (token) {
    setIsToken(true);
  } else {
    setIsToken(false);
  }
};

export default middleWareToken;
