import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { blobtoBase64, fileToBase64 } from "@/utils/toBase64";
import axios from "axios";
const ModalEditUser = ({ user, openModal, setOpenModal, users, setReload }) => {
  const [img, setImg] = useState();
  const [sizeImg, setSizeImg] = useState();
  const [dataName, setDataName] = useState("");
  const [dataUserName, setDataUserName] = useState("");
  const [dataPass, setDataPass] = useState("");
  const [dataAddress, setDataAddress] = useState("");
  const [dataPhone, setDataPhone] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [messageApi, contextHolder] = message.useMessage();
   const successUpdate = () => {
     messageApi.open({
       type: "success",
       content: "Chỉnh sửa thành công!",
     });
   };
   const error = () => {
     messageApi.open({
       type: "error",
       content: "Có lỗi không mong muốn!",
     });
   };
  const warningSize = () => {
    messageApi.open({
      type: "warning",
      content: "Kích thước ảnh không vượt quá 2Mb",
    });
  };
  const warningUserName = () => {
    messageApi.open({
      type: "warning",
      content: "Tên đăng nhập này đã tồn tại",
    });
  };
  const uploadImg = (e) => {
    fileToBase64(e.target.files[0], setImg);
    setSizeImg(e.target.files[0]?.size);
  };
  const handleOk = async() => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const dataNew = {
      codeUser: user.codeUser,
      name: dataName === "" ? user.nameUser : dataName,
      avt: img === undefined ? user.avtUser.data : img,
      username: dataUserName === "" ? user.username : dataUserName,
      pass: dataPass === "" ? user.pass : dataPass,
      address: dataAddress === "" ? user.address : dataAddress,
      phone: dataPhone === "" ? user.phone : dataPhone,
      role: user.roleUser,
      idUser: user.id,
      cart: user.cart,
    };
    const maxSizeImg = 2 * 1024 * 1024;
    if(img && sizeImg > maxSizeImg) {
      setConfirmLoading(false);
      warningSize();
    }
    const checkUserName = users.find(el => el.username === dataUserName);
    if(checkUserName) {
      setConfirmLoading(false);
      warningUserName();
    }
    else {
      try {
        await axios.put("http://127.0.0.1:8080/api-users/update-user", dataNew);
        setConfirmLoading(false);
        setOpenModal(false);
        successUpdate();
        setReload(1);
      } catch (err) {
        error();
        console.log(err);
        setConfirmLoading(false);
      }
    }
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <>
    {contextHolder}
      <Modal
        title="Chỉnh sửa thông tin"
        open={openModal}
        onOk={handleOk}
        okText="Cập nhật"
        cancelText="Huỷ"
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="flex items-center py-6">
          <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
            <img
              className="w-12 h-12 mr-4 object-cover"
              src={img === undefined ? blobtoBase64(user.avtUser) : img}
              alt="Avatar Upload"
            />
          </div>
          <label className="cursor-pointer ">
            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
              Browse
            </span>
            <input onChange={uploadImg} type="file" className="hidden" />
          </label>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name User
            </label>
            <input
              onChange={(e) => setDataName(e.target.value)}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={user.nameUser}
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              onChange={(e) => setDataUserName(e.target.value)}
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={user.username}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              onChange={(e) => setDataPass(e.target.value)}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={user.pass}
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              onChange={(e) => setDataAddress(e.target.value)}
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={user.address}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <input
              onChange={(e) => setDataPhone(e.target.value)}
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={user.phone}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalEditUser;
