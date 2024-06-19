'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { blobtoBase64 } from "@/utils/toBase64";
import formatPrice from "@/utils/formatPrice";
const ProductsPage = () => {
  const URL_API = `http://127.0.0.1:8080/api-menu/menu`;
  const [pros, setPros] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    const getAllPros = async() => {
        setIsLoad(true);
        try {
            const res = await axios.get(URL_API);
            setPros(res.data);
            setIsLoad(false)
        }
        catch(err) {
            console.log(err);
        }
    }
    getAllPros();
  },[])
  return (
    <div className="products-page flex flex-col items-center">
      <div className="navbar flex items-center justify-center flex-wrap mt-[10px]">
        <div className="flex items-center mx-[10px] my-[10px]">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
              placeholder="Tìm sản phẩm"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </div>

        <div className="flex items-center mx-[10px] my-[10px]">
          <label
            className="w-[80px] p-[5px] font-medium text-sm"
            htmlFor="category"
          >
            Bộ lọc
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="null">Không có</option>
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
      </div>
      <div className="listProduct">
        <ul className="listItem flex flex-wrap items-center justify-center">
          {pros.map((dt, id) => (
            <li key={id} className="item mx-[10px] my-[15px]">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <button className="relative">
                  <img
                    className="p-8 rounded-t-lg w-full"
                    src={blobtoBase64(dt.imgItem)}
                    alt="product image"
                  />
                  {dt.statusItem === false && (
                    <div className="statusProduct absolute bottom-[10px] text-center w-full bg-black h-[50px] bg-opacity-40">
                      <div className="top-[50%] translate-y-2/4 text-white text-xl font-medium">
                        Hết hàng
                      </div>
                    </div>
                  )}
                </button>
                <div className="px-5 pb-5">
                  <button>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                      {dt.nameItem}
                    </h5>
                  </button>
                  <div className="flex items-center mt-2.5 mb-5">
                    <span className="font-normal mr-[5px]">Đánh giá:</span>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-[5px]">
                      3
                    </span>
                  </div>
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex flex-col">
                      <span className="text-base font-extralight text-gray-900 dark:text-white line-through">
                        {formatPrice(dt.price)} VND
                      </span>
                      <span className="text-lg font-medium">
                        {formatPrice(dt.price - (dt.price * dt.endow) / 100)}{" "}
                        VND
                      </span>
                    </div>
                    <button className="flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                      <div className="mr-[5px]">Add to card</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] h-[18px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPage;
