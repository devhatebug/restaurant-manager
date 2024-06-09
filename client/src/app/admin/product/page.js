"use client";
import React, { useState, useEffect } from "react";
import TableProducts from "@/components/tableProducts";
import axios from "axios";

const Product = () => {
  const URL_API = `http://127.0.0.1:8080/api-menu/menu`;
  const [dataProducts, setDataProducts] = useState();
  const [middleCheck, setMiddleCheck] = useState(0);
  const [lengthPagination, setLengthPagination] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [addFinish, setAddFinish] = useState(false);
  const [addErr, setAddErr] = useState(false);
  const limit = 10;
  const [valueSearch, setValueSearch] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [dataSearched, setDataSearched] = useState();
  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${URL_API}`);
      setDataProducts(res.data);
      const lenghtAllProducts = res.data.length;
      setLengthPagination(Math.ceil(lenghtAllProducts / limit));
      setMiddleCheck(0);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [middleCheck]);

  const multipleSearch = (arr) => {
    return arr.filter((el) =>
      Object.keys(el).some((parameter) =>
        el[parameter].toString().toLowerCase().includes(valueSearch)
      )
    );
  };
  const handleSearch = () => {
    setDataSearched(multipleSearch(dataProducts))
    setIsSearch(true);
  }
  const handleCloseSearch = () => {
    setIsSearch(false);
  }
  return (
    <div className="products ml-0 sm:ml-[260px] pl-[10px] pr-[10px]">
      <div className="flex items-center justify-between pt-[30px] mb-[50px]">
        <div className="title-page">
          <h4 className="font-semibold sm:text-2xl text-base">
            Danh sách sản phẩm
          </h4>
        </div>
        <div className="search-box">
          <div className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setValueSearch(e.target.value)}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Tìm kiếm sản phẩm"
                required
              />
            </div>
            <button
              onClick={handleSearch}
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
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
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="table-users mb-[30px]">
        <TableProducts
          products={dataProducts}
          middleCheck={middleCheck}
          setMiddleCheck={setMiddleCheck}
          lengthPagination={lengthPagination}
          limit={limit}
          setIsSuccess={setIsSuccess}
          setIsErr={setIsErr}
          setAddErr={setAddErr}
          setAddFinish={setAddFinish}
          isSearch={isSearch}
          onClose={handleCloseSearch}
          dataSearched={dataSearched}
          setIsSearch={setIsSearch}
        />
      </div>
      <div className="flex flex-col absolute bottom-[10px] right-[10px]">
        {isSuccess && (
          <div
            role="alert"
            className="alert alert-success text-white w-[auto] font-medium animate-slideInRight my-[10px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Thêm sản phẩm thành công</span>
          </div>
        )}
        {isErr && (
          <div
            role="alert"
            className="alert alert-error text-white w-[auto] font-medium animate-slideInRight"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Lỗi! Đã xãy ra lỗi</span>
          </div>
        )}
      </div>
      <div className="flex flex-col absolute bottom-[10px] right-[10px]">
        {addFinish && (
          <div
            role="alert"
            className="alert alert-success text-white w-[auto] font-medium animate-slideInRight my-[10px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Chỉnh sửa thành công sản phẩm</span>
          </div>
        )}
        {addErr && (
          <div
            role="alert"
            className="alert alert-error text-white w-[auto] font-medium animate-slideInRight "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Lỗi! Đã xãy ra lỗi</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
