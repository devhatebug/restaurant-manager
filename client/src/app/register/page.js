"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import getAllUsers from "@/utils/getAllUser";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [dataUsers, setDataUsers] = useState([]);
  const [code, setCode] = useState("abcsss");
  const [img, setImg] = useState(null); // Lưu data URL cho preview
  const [file, setFile] = useState(null); // Lưu file ảnh để gửi lên server
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const role = "user";
  const [isReady, setIsReady] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [notiDuplicate, setNotiDuplicate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  // Đóng popup thành công
  const closePopup = () => {
    setIsSuccess(false);
  };

  // Xử lý chọn file ảnh
  const handleFileImg = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Kiểm tra kích thước file
      if (selectedFile.size > 2 * 1024 * 1024) {
        setIsWarning(true);
        return;
      }

      setIsWarning(false);
      setFile(selectedFile);

      // Tạo preview ảnh
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result); // Lưu data URL cho preview
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Lấy danh sách người dùng
  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await getAllUsers();
        setDataUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUser();
  }, []);

  // Kiểm tra trùng lặp username
  useEffect(() => {
    if (username) {
      const foundUser = dataUsers.find((user) => user.username === username);
      setNotiDuplicate(!!foundUser);
    } else {
      setNotiDuplicate(false);
    }
  }, [username, dataUsers]);

  // Đăng ký người dùng
  const registerUser = async () => {
    const isValid = [code, name, username, pass, address, phone].every(
      (value) => value !== null && value !== undefined && value !== ""
    );

    if (!isValid) {
      setIsReady(true);
      return;
    }

    if (notiDuplicate) {
      return;
    }

    if (file && file.size > 2 * 1024 * 1024) {
      setIsWarning(true);
      return;
    }

    try {
        setIsLoading(true)
      const formData = new FormData();
      formData.append("codeUser", code);
      formData.append("name", name);
      formData.append("username", username);
      formData.append("pass", pass);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("role", role);
      if (file) {
        formData.append("file", file); // Gửi file ảnh
      }

      await axios.post("http://127.0.0.1:8080/api-users/add-users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setIsReady(false);
      setIsWarning(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Error registering user:", err);
      setIsSuccess(false);
      setIsReady(true);
    }
    setIsLoading(false)
  };

  return (
    <>
      {isSuccess && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full animate-openingPopup"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  viewBox="0 -398 1820 1820"
                  className="icon mx-auto text-gray-400 w-[200px] h-[200px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M910.317 172.563c-187.07 0-339.532 152.462-339.532 339.532 0 186.975 152.462 339.532 339.532 339.532s339.722-152.652 339.722-339.532c0-187.07-152.558-339.532-339.722-339.532zm0 632.225c-161.185 0-292.504-131.698-292.504-292.693 0-161.375 131.319-292.314 292.504-292.314 161.28 0 292.693 130.939 292.693 292.314 0 160.995-131.318 292.693-292.693 292.693z"
                    fill="#18D194"
                  />
                  <path
                    d="M823.087 497.683c7.206 13.464 17.067 29.772 25.221 45.7 8.344 16.214 20.575 38.685 20.575 38.685s35.935-74.714 61.724-113.493c65.802-98.702 127.052-122.122 127.052-122.122s-6.352 52.717-5.689 73.956c.759 24.272 10.81 52.243 10.81 52.243s-56.605 32.9-110.27 90.832c-33.85 36.599-79.36 108.469-79.36 108.469s-38.4-46.744-68.646-70.543c-33.565-26.453-73.671-47.881-73.671-47.881s33.28-21.808 50.157-32.711c16.971-10.81 42.097-23.135 42.097-23.135z"
                    fill="#E93A63"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-700 dark:text-gray-400">
                  Đăng kí tài khoản thành công. Đến trang đăng nhập?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Đồng ý
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={closePopup}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6 mt-[-20px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-[100px] w-auto"
            src="https://i.pinimg.com/originals/58/8d/a7/588da7a4f99c81c8f7d6053790378c58.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Đăng kí tài khoản mới
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
            Or
            <a
              href="/login"
              className="font-semibold text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              <span> </span>Đăng nhập vào tài khoản
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                  <span className="font-medium">Cảnh báo lỗi!</span> Kích thước
                  ảnh không vượt quá 2MB
                </div>
              </div>
            )}
            {notiDuplicate && (
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
                  <span className="font-medium">Cảnh báo lỗi!</span> Tên người
                  dùng đã được sử dụng
                </div>
              </div>
            )}
            {isReady && (
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
                  <span className="font-medium">Cảnh báo lỗi!</span> Không mục
                  nào được để trống
                </div>
              </div>
            )}
            <div className="mb-6">
              <label
                className="block text-sm font-medium leading-5 text-gray-700 mb-1"
                htmlFor="avt-user"
              >
                Ảnh đại diện
              </label>
              {img ? (
                <div className="relative w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer p-[5px]">
                  <button
                    onClick={() => {
                      setImg(null);
                      setFile(null);
                    }}
                    className="absolute bg-rose-600 p-[10px] rounded-lg top-[10px] left-[10px] text-white font-medium z-10"
                  >
                    Thay đổi
                  </button>
                  <img
                    className="w-full h-auto max-h-64 object-contain"
                    src={img}
                    alt="Avatar preview"
                    onError={(e) => console.error("Error loading image:", e)}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="avt-user"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 2MB)
                      </p>
                    </div>
                    <input
                      id="avt-user"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileImg}
                    />
                  </label>
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700 mb-1"
              >
                Tên hiển thị
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="mr-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-700 mb-1"
                >
                  Tên đăng nhập
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    placeholder="@username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="ml-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-5 text-gray-700 mb-1"
                >
                  Số điện thoại
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    placeholder="0123456789"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700 mb-1"
              >
                Mật khẩu
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  onChange={(e) => setPass(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-5 text-gray-700 mb-1"
              >
                Địa chỉ
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="VD: Ngõ 1, Đường 2, Phố 3, Huyện 4, Tỉnh 5"
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={registerUser}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {
                    isLoading ? 'Đang xử lý...' : 'Đăng ký'
                  }
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;