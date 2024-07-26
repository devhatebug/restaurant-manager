import { useState, useEffect } from "react";
import getAllUsers from "./getAllUser"
const fetchUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [dataUserLog, setDataUserLog] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setAllUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const founded = allUsers.find((user) => user.id === userId);
    setDataUserLog(founded);
  }, [userId, allUsers]);

  return { dataUserLog, setUserId };
};

export default fetchUser;
