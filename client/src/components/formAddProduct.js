"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { fileToBase64 } from "@/utils/toBase64";
const FormAddProduct = ({
  onClose,
  setMiddleCheck,
  setIsErr,
  setIsSuccess,
}) => {
  // state kiểm tra lỗi
 const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // state data
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [classify, setClassify] = useState("main meal");
  const [endow, setEndow] = useState("");
  const [isNew, setIsNew] = useState("0");
  const [isHot, setIsHot] = useState("0");
  const [isSeller, setIsSeller] = useState("0");
  const [status, setStatus] = useState("0");
  const [price, setPrice] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  // state hiển thị cảnh báo
  const [isWarning, setIsWarning] = useState(false);

  // hàm xử lý ảnh
  const handleChangeFileImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra kích thước file
      if (file.size > 2 * 1024 * 1024) {
        setIsWarning(true);
        return;
      }

      setIsWarning(false);
      setImgFile(file);

      // Tạo preview ảnh
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // hàm huỷ ảnh vừa chọn
  const handleCancelFile = () => {
    setImgFile(null);
    setPreviewImg("");
  };

  // hàm thêm mới sản phẩm
  const addNewProduct = async () => {
    // Kiểm tra các trường bắt buộc
    if (!code || !name || !price || !imgFile) {
      setIsEmpty(true);
      return;
    }

    // Kiểm tra kích thước ảnh
    if (imgFile.size > 2 * 1024 * 1024) {
      setIsWarning(true);
      return;
    }

    setIsLoading(true);
    setIsEmpty(false);
    setIsWarning(false);

    try {
      const formData = new FormData();
      formData.append('code', code);
      formData.append('name', name);
      formData.append('file', imgFile);
      formData.append('classify', classify);
      formData.append('endow', endow || "0");
      formData.append('isnew', isNew);
      formData.append('ishot', isHot);
      formData.append('isseller', isSeller);
      formData.append('feedback', JSON.stringify([]));
      formData.append('status', status);
      formData.append('price', price);

      await axios.post(
        "http://127.0.0.1:8080/api-menu/add-menu",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setMiddleCheck(1);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Add product error:", err);
      setIsErr(true);
      setTimeout(() => {
        setIsErr(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center ml-0 sm:ml-[260px] px-[10px]">
      <div className="animate-openingPopup w-[900px] h-[80%] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg px-[20px] py-[20px]">
        {isEmpty && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">
              <strong>Cảnh báo lỗi!</strong> Vui lòng không dể trống bất kì mục
              nào
            </div>
            <button
              onClick={() => setIsEmpty(false)}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
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
            </button>
          </div>
        )}
        {isWarning && (
          <div
            id="alert-border-2"
            className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">
              <strong>Cảnh báo lỗi!</strong> Kích thước ảnh không vượt quá 2mb
            </div>
            <button
              onClick={() => setIsWarning(false)}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
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
            </button>
          </div>
        )}
        <button
          onClick={onClose}
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="fixed inline-block text-gray-500  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
        >
          <svg
            className="w-[30px] h-[30px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.5"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="#7B7B7B "
              ></path>
              <path
                d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                fill="#7B7B7B "
              ></path>
            </g>
          </svg>
        </button>
        <div className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Thêm sản phẩm mới</h2>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                  Tên sản phẩm
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập tên sản phẩm"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Giá gốc
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="999.999đ"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="endow"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Giảm giá
                </label>
                <input
                  onChange={(e) => setEndow(e.target.value)}
                  type="number"
                  name="endow"
                  id="endow"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="50%"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="category-form-add"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Danh mục
                </label>
                <select
                  value={classify}
                  onChange={(e) => setClassify(e.target.value)}
                  id="category-form-add"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="main meal">Đồ ăn bữa chính</option>
                  <option value="snack">Đồ ăn vặt</option>
                  <option value="barbecue">Đồ nướng</option>
                  <option value="fried">Đồ chiên</option>
                  <option value="steamed">Đồ hấp</option>
                  <option value="drink">Đồ uống</option>
                  <option value="desert">Tráng miệng</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Trạng thái
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="1">Còn hàng</option>
                  <option value="0">Hết hàng</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="new"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sản phẩm mới
                </label>
                <select
                  value={isNew}
                  onChange={(e) => setIsNew(e.target.value)}
                  id="new"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="hot"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sản phẩm yêu thích
                </label>
                <select
                  value={isHot}
                  onChange={(e) => setIsHot(e.target.value)}
                  id="hot"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="seller"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sản phẩm bán chạy
                </label>
                <select
                  value={isSeller}
                  onChange={(e) => setIsSeller(e.target.value)}
                  id="seller"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mã sản phẩm
                </label>
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  name="code"
                  id="code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="KMASOR12"
                  required=""
                />
              </div>
             <div className="sm:col-span-2">
                {!previewImg ? (
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="img-file"
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
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                      </div>
                      <input
                        onChange={handleChangeFileImg}
                        id="img-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                ) : (
                  <div className="relative w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer p-[5px]">
                    <button
                      onClick={handleCancelFile}
                      className="absolute bg-rose-600 p-[10px] rounded-lg top-[10px] left-[10px] text-white font-medium z-10"
                    >
                      Thay đổi
                    </button>
                    <img
                      className="w-full h-auto max-h-64 object-contain"
                      src={previewImg}
                      alt="Product preview"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Nút thêm sản phẩm */}
            <button
              onClick={addNewProduct}
              disabled={isLoading}
              className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm text-white font-medium text-center bg-[#0369A1] rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Đang thêm...
                </>
              ) : 'Thêm sản phẩm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
