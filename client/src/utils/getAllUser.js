import axios from "axios";

const getAllUsers = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8080/api-users/users");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getAllUsers;
