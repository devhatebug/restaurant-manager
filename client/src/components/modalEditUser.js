import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import axios from "axios";

const ModalEditUser = ({ user, openModal, setOpenModal, users, setReload }) => {
  const [imgFile, setImgFile] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const [dataName, setDataName] = useState("");
  const [dataUserName, setDataUserName] = useState("");
  const [dataPass, setDataPass] = useState("");
  const [dataAddress, setDataAddress] = useState("");
  const [dataPhone, setDataPhone] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Các hàm hiển thị message
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

  // Xử lý upload ảnh
  const uploadImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);

      // Tạo preview ảnh
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý cập nhật thông tin
  const handleOk = async () => {
    setConfirmLoading(true);

    // Kiểm tra kích thước ảnh
    const maxSizeImg = 2 * 1024 * 1024;
    if (imgFile && imgFile.size > maxSizeImg) {
      setConfirmLoading(false);
      warningSize();
      return;
    }

    // Kiểm tra username trùng
    const checkUserName = users.find(el => el.username === dataUserName && el.id !== user.id);
    if (checkUserName) {
      setConfirmLoading(false);
      warningUserName();
      return;
    }

    try {
      // Tạo FormData
      const formData = new FormData();
      formData.append('idUser', user.id);
      formData.append('codeUser', user.codeUser);
      formData.append('name', dataName || user.nameUser);
      formData.append('username', dataUserName || user.username);
      formData.append('pass', dataPass || user.pass);
      formData.append('address', dataAddress || user.address);
      formData.append('phone', dataPhone || user.phone);
      formData.append('role', user.roleUser);
      formData.append('cart', JSON.stringify(user.cart));
      formData.append('currentAvt', user.avtUser);

      if (imgFile) {
        formData.append('file', imgFile);
      }

      // Gửi request
      await axios.put("http://127.0.0.1:8080/api-users/update-user", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setConfirmLoading(false);
      setOpenModal(false);
      successUpdate();
      setReload(prev => prev + 1);
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
      error();
      setConfirmLoading(false);
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
              src={previewImg || user.avtUser}
              alt="Avatar Upload"
            />
          </div>
          <label className="cursor-pointer">
            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
              Browse
            </span>
            <input
              onChange={uploadImg}
              type="file"
              accept="image/*"
              className="hidden"
            />
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
