import React from "react";
import Cookies from "js-cookie"
const logOutAcc = (setErrOut) => {
    Cookies.remove('tokenUser');
    const token = Cookies.get("tokenUser");
    if(!token) {
        return true;
    } else {
        setErrOut(false)
        return false;
    }
}

export default logOutAcc;