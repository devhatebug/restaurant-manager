import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const getAuth = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = Cookies.get("tokenUser");
    if (token) {
      setIsLogIn(true);
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Failed to decode token:", error);
        setIsLogIn(false);
      }
    } else {
      setIsLogIn(false);
    }
  }, []);

  return { isLogIn, userId, setUserId };
};

export default getAuth;
