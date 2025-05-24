"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fileToBase64, blobtoBase64 } from "@/utils/toBase64";

const FormAddUser = ({
  onClose,
  dataUsers,
  setIsReload,
  setCheckData,
  setUserUpdate,
}) => {
  const [imgFile, setImgFile] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const [code, setCode] = useState("abc");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [notiDuplicate, setNotiDuplicate] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isLoading, setIsLoading]   = useState(false);

  const handleUploadFile = (e) => {
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

  const addUser = async () => {
    // Kiểm tra các trường bắt buộc
    const isValid = [name, username, pass, address, phone].every(
      (value) => value !== null && value !== undefined && value !== ""
    );

    // Kiểm tra kích thước ảnh
    const maxSizeImg = 2 * 1024 * 1024;
    if (imgFile && imgFile.size > maxSizeImg) {
      setIsWarning(true);
      return;
    }

    // Kiểm tra username trùng
    if (notiDuplicate) {
      return;
    }

    if (!isValid) {
      setIsReady(true);
      return;
    }

    try {
        setIsLoading(true)
      // Tạo FormData
      const formData = new FormData();
      formData.append('codeUser', code);
      formData.append('name', name);
      formData.append('username', username);
      formData.append('pass', pass);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('role', role);

      if (imgFile) {
        formData.append('file', imgFile);
      }

      // Gửi request
      await axios.post("http://127.0.0.1:8080/api-users/add-users", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setCheckData(1);
      setIsReload(prev => prev + 1);
      setUserUpdate(1);
      onClose();
    } catch (err) {
      console.error("Lỗi khi thêm người dùng:", err);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    const foundUserName = dataUsers.find((user) => user.username === username);
    setNotiDuplicate(foundUserName !== undefined && username !== "");
  }, [username, dataUsers]);
  return (
    <div>
      {isWarning && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
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
            <span className="font-medium">Cảnh báo lỗi!</span> Kích thước ảnh
            không vượt quá 2mb
          </div>
        </div>
      )}
       {notiDuplicate && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
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
            <span className="font-medium">Cảnh báo lỗi!</span> Tên người dùng đã
            được sử dụng
          </div>
        </div>
      )}
       {isReady && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
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
            <span className="font-medium">Cảnh báo lỗi!</span> Kông mục nào được
            để trống
          </div>
        </div>
      )}
      <div className="flex items-center py-6">
        <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
          <img
            className="w-12 h-12 mr-4 object-cover"
            src={previewImg || "https://avatars.githubusercontent.com/u/739984?v=4"} // Thay bằng đường dẫn ảnh mặc định
            alt="Avatar Upload"
          />
        </div>
        <label className="cursor-pointer">
          <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
            Browse
          </span>
          <input
            onChange={handleUploadFile}
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
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
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
            onChange={(e) => setRole(e.target.value)}
            value={role}
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="user">user</option>
            <option value="admin">admin</option>
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
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
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
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
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
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
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
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>
      <button
        onClick={addUser}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-[10px] mb-[10px]"
      >
        {
            isLoading ? 'Đang xử lý ...' : 'Submit'
        }
      </button>
      <button
        onClick={onClose}
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormAddUser;
