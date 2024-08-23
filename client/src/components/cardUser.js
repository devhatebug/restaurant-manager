import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { blobtoBase64 } from "@/utils/toBase64";
import { useRouter } from "next/navigation";
import logOutAcc from "@/utils/logOut";
import ModalEditUser from "./modalEditUser";
const { Meta } = Card;
const CardUser = () => {
  const router = useRouter();
  const [errOut, setErrOut] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [idUser, setIdUser] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [reload, setReload] = useState(0);
  const errLogOut = () => {
    messageApi.open({
      type: "error",
      content: "Đã xảy ra lỗi không mong muốn!",
    });
  };
  const handleLogOut = () => {
    const statusOut = logOutAcc(setErrOut);
    if (statusOut === true) {
      router.push("/");
    }
    if (errOut === false && statusOut === false) {
      errLogOut();
    }
  };
  const openModalEditUser = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    const allUsers = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api-users/users");
        setUsers(res.data);
        setReload(0);
      } catch (err) {
        console.log(err);
        setReload(0)
      }
    };
    allUsers();
  }, [reload]);
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
      router.push("/login");
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
      {user && (
        <ul>
          <li>@{user.username}</li>
          <li>{user.phone}</li>
          <li>{user.address}</li>
        </ul>
      )}
    </div>
  );
  return (
    <>
      {contextHolder}
      {openModal && (
        <ModalEditUser
          user={user}
          openModal={openModal}
          setOpenModal={setOpenModal}
          users={users}
          setReload={setReload}
        />
      )}
      <Card
        style={{
          width: "90vw",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          margin: "0 auto",
        }}
        actions={[
          <ShoppingCartOutlined
            onClick={() => router.push("/cart")}
            style={{ fontSize: "20px", color: "black" }}
          />,
          <EditOutlined
            onClick={openModalEditUser}
            style={{ fontSize: "20px", color: "black" }}
            key="edit"
          />,
          <LoginOutlined
            onClick={handleLogOut}
            style={{ fontSize: "20px", color: "black" }}
          />,
        ]}
      >
        <Meta
          avatar={
            <Avatar size="50%" src={user ? blobtoBase64(user.avtUser) : ""} />
          }
          title={user ? user.nameUser : "Name user"}
          description={dataUser()}
        />
      </Card>
    </>
  );
};

export default CardUser;
