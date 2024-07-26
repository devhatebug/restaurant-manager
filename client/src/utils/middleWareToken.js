import Cookies from "js-cookie";
const middleWareToken = () => {
  const token = Cookies.get("tokenUser");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default middleWareToken;
