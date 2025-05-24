'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fileToBase64, blobtoBase64 } from "@/utils/toBase64";

const FormEditUser = ({ onClose, dataUser,handleUpdate, handleCheckData, handleErr, userUpdate, listUsers, setIsReload }) => {
    if (!dataUser || dataUser.length === 0) return null;
    const data = dataUser[0];
    const [dataName, setDataName] = useState('');
    const [dataRole, setDataRole] = useState('');
    const [dataUserName, setDataUserName] = useState('');
    const [dataPass, setDataPass] = useState('');
    const [dataAddress, setDataAddress] = useState('');
    const [dataPhone, setDataPhone] = useState('');
    const [dataImg, setDataImg] = useState(null);
    const [previewImg, setPreviewImg] = useState();
    const [dataCodeUser, setDataCodeUser] = useState('abc');
    const [isWarning, setIsWarning] = useState(false);
    const [isImg, setIsImg] = useState(false);

    useEffect(() => {
        if (dataImg) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImg(reader.result);
            };
            reader.readAsDataURL(dataImg);
        }
    }, [dataImg]);

    const handleUploadFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDataImg(file);
        }
    }

    const handleUpdateUser = async () => {
    const checkValue = listUsers.find((user) => user.username === dataUserName);
    const maxSizeImg = 2 * 1024 * 1024;

    if (checkValue !== undefined) {
        setIsWarning(true);
        return;
    }

    if (dataImg?.size > maxSizeImg) {
        setIsImg(true);
        return;
    }

    const formData = new FormData();
    formData.append('idUser', data.id);
  formData.append('codeUser', dataCodeUser);
  formData.append('name', dataName || data.nameUser);
  formData.append('username', dataUserName || data.username);
  formData.append('pass', dataPass || data.pass);
  formData.append('address', dataAddress || data.address);
  formData.append('phone', dataPhone || data.phone);
  formData.append('role', dataRole || data.roleUser);
  formData.append('cart', JSON.stringify(data.cart));
  formData.append('currentAvt', data.avtUser);

  if (dataImg) {
    formData.append('file', dataImg);
  }

    try {
        const res = await axios.put(
            'http://127.0.0.1:8080/api-users/update-user',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        );
        handleCheckData(1);
        userUpdate(1);
        setIsReload(1);
        handleUpdate(true);
        onClose();
    } catch (err) {
        handleErr(true);
        console.log(err);
    }
};

    return (
      <div>
        {isWarning && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Cảnh báo lỗi!</span> Username này đã
              được đăng kí, vui lòng chọn một cái khác
            </div>
          </div>
        )}
        {isImg && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Cảnh báo lỗi!</span> Kích thước ảnh không được qua 2mb
            </div>
          </div>
        )}
        <div className="flex items-center py-6">
                <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                    <img
                        className="w-12 h-12 mr-4 object-cover"
                        src={previewImg || data.avtUser}
                        alt="Avatar Upload"
                    />
                </div>
                <label className="cursor-pointer ">
                    <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                        Browse
                    </span>
                    <input onChange={handleUploadFile} type="file" className="hidden" />
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
              placeholder={data.nameUser}
              required
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <select
              onChange={(e) => setDataRole(e.target.value)}
              value={dataRole}
              id="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option
                value={`${data.roleUser === "người dùng" ? "user" : "admin"}`}
              >
                {data.roleUser}
              </option>
              {data.roleUser === "admin" ? (
                <option value="user">user</option>
              ) : (
                <option value="admin">admin</option>
              )}
            </select>
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
              placeholder={data.username}
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
              placeholder={data.pass}
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
              placeholder={data.address}
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
              placeholder={data.phone}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <button
          onClick={handleUpdateUser}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-[10px] mb-[10px]"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancel
        </button>
      </div>
    );
}

export default FormEditUser;
