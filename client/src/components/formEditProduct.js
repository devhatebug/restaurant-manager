import React, { useState, useEffect } from "react";
import { blobtoBase64, fileToBase64 } from "@/utils/toBase64";
import axios from "axios";

const FormEditProduct = ({onClose, dataProduct, setMiddleCheck, products, setAddErr, setAddFinish}) => {
    const data = dataProduct[0];
    // state data 
    const [name, setName] = useState(data.nameItem);
    const [price, setPrice] = useState(data.price);
    const [endow, setEndow] = useState(data.endow);
    const [classify, setClassify] = useState(data.classify);
    const [status, setStatus] = useState(data.statusItem === true ? '1' : '0');
    const [isNew, setIsNew] = useState(data.isNew === true ? '1' : '0');
    const [isHot, setIsHot] = useState(data.isHot === true ? '1' : '0');
    const [isSeller, setIsSeller] = useState(data.isSeller === true ? '1' : '0');
    const [code, setCode] = useState(data.codeItem);
    const [img, setImg] = useState();
    const [base64Img, setBase64Img] = useState(blobtoBase64(data.imgItem));
    const [isChangeImg, setIsChangeImg] = useState(false);
    const [isImg, setIsImg] = useState(false);
    const [isWarning, setIsWarning] = useState(false);
    const [maxSize, setMaxSize] = useState(false);
    // chỉnh sửa định dạng tiền tệ
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    }
    // function handle img 
    const changeImg = () => {
        setIsChangeImg(true)
        setIsImg(false)
    }
    const handleChangeValueImg = async(e) => {
        fileToBase64(e.target.files[0], setBase64Img)
        setImg(e.target.files[0])
        if(e.target.files[0] !== undefined) {
            setIsImg(true)
        }
    } 
    const changeNewImg = () => {
        setBase64Img("")
        setImg(undefined)
        setIsImg(false)
    }
    // form data update
     const dataUpdate = {
        code: code,
        name: name,
        img: base64Img,
        classify: classify,
        endow: endow,
        isnew: isNew,
        ishot: isHot,
        isseller: isSeller,
        feedback: data.feedback,
        status: status,
        price: price,
        idItem: data.id,
    }
    const handleUpdateProduct = async () => {
      const checkValue = products.find((product) => product.codeItem === code);
      const maxSizeImg = 2 * 1024 * 1024;
      if (
        code === data.codeItem ||
        (checkValue === undefined && img.size <= maxSizeImg)
      ) {
        try {
          await axios.put(
            `http://127.0.0.1:8080/api-menu/update-menu`,
            dataUpdate
          );
          console.log("done");
          setMiddleCheck(1);
          setAddFinish(true);
          setTimeout(() => {
            setAddFinish(false);
          }, 3000);
          onClose();
        } catch (err) {
          console.log(err);
          setAddErr(true);
          setTimeout(() => {
            setAddErr(false);
          }, 3000);
        }
      } else {
        setIsWarning(true);
        setCode(data.codeItem);
      }
    };


    return (
      <div className="fixed inset-0 flex items-center justify-center ml-0 sm:ml-[260px] px-[10px]">
        <div className="animate-openingPopup w-[900px] h-[80%] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg px-[20px] py-[20px]">
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
                <strong>Cảnh báo lỗi!</strong> Mã sản phẩm đã tồn tại trong hệ
                thống
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
          {maxSize && (
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
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Chỉnh sửa sản phẩm
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder={data.nameItem}
                    required=""
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
                    placeholder={formatPrice(data.price) + "đ"}
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
                    placeholder={data.endow + `%`}
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
                    {data.statusItem === true ? (
                      <>
                        <option value="1">Còn hàng</option>
                        <option value="0">Hết hàng</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Hết hàng</option>
                        <option value="1">Còn hàng</option>
                      </>
                    )}
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
                    {data.isNew === true ? (
                      <>
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </>
                    ) : (
                      <>
                        <option value="0">False</option>
                        <option value="1">True</option>
                      </>
                    )}
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
                    {data.isHot === true ? (
                      <>
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </>
                    ) : (
                      <>
                        <option value="0">False</option>
                        <option value="1">True</option>
                      </>
                    )}
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
                    {data.isSeller === true ? (
                      <>
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </>
                    ) : (
                      <>
                        <option value="0">False</option>
                        <option value="1">True</option>
                      </>
                    )}
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
                    placeholder={data.codeItem}
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  {isChangeImg && !isImg && (
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                        <input
                          onChange={handleChangeValueImg}
                          id="img-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                  {!isChangeImg && (
                    <div className="relative w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer p-[5px]">
                      <button
                        onClick={changeImg}
                        className="absolute bg-rose-600 p-[10px] rounded-lg top-[10px] left-[10px] text-white font-medium "
                      >
                        Thay đổi
                      </button>
                      <img
                        className=""
                        src={blobtoBase64(data.imgItem)}
                        alt=""
                      />
                    </div>
                  )}
                  {isImg && (
                    <div className="relative w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer p-[5px]">
                      <button
                        onClick={changeNewImg}
                        className="absolute bg-rose-600 p-[10px] rounded-lg top-[10px] left-[10px] text-white font-medium "
                      >
                        Thay đổi
                      </button>
                      <img className="" src={base64Img} alt="" />
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handleUpdateProduct}
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm text-white font-medium text-center bg-[#0369A1] rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FormEditProduct;