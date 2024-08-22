import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import { blobtoBase64 } from "@/utils/toBase64";
import { useRouter } from "next/navigation";
const { Meta } = Card;
const CardUser = () => {
    const router = useRouter();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [idUser, setIdUser] = useState()
  const allUsers = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api-users/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allUsers();
  }, []);

  const token = Cookies.get("tokenUser");
  useEffect(() => {
    const token = Cookies.get("tokenUser");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIdUser(decodedToken.id);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
        router.push('/login')
    }
  }, []);
  useEffect(() => {
    if (users.length > 0) {
      const findUser = users.find((el) => el.id === idUser);
      setUser(findUser);
    }
  }, [users]);
  const dataUser = () => (
    <div>
      
    </div>
  );

  return (
    <Card
      style={{
        width: "90%",
        margin: "0 auto"
      }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar size={100} src={user ? blobtoBase64(user.avtUser) : ""} />
        }
        title={user ? user.nameUser : "Name user"}
        description={dataUser()}
      />
    </Card>
  );
};

export default CardUser;
