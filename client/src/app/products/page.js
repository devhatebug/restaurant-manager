"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { blobtoBase64 } from "@/utils/toBase64";
import formatPrice from "@/utils/formatPrice";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import Pagination from "@/components/pagination";
import actionAddToCart from "@/utils/addToCart";
import LoadingPopup from "@/components/loadingPopup";
import SuccessPopup from "@/components/successPopup";
import LoginPopup from "@/components/loginPopup";
import FormOrder from "@/components/formOrder";
import AlertLogin from "@/components/alertLogin";
import getAuth from "@/utils/getAuthor";
const ProductsPage = () => {
  const router = useRouter();
  const { isLogIn, userId, setUserId } = getAuth();
  const [products, setProducts] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [valueFilter, setValueFilter] = useState("null");
  const [valueSearch, setValueSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lenghtPage, setLenghtPage] = useState();
  const limit = 4;
  const offset = (currentPage - 1) * limit;
  const URL_API = `http://127.0.0.1:8080/api-menu/products?offset=${offset}&limit=${limit}`;
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8080/api-menu/menu`);
        setIsLoad(false);
        const lenght = res.data.length;
        setLenghtPage(Math.ceil(lenght / limit));
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, [isLoad]);
  useEffect(() => {
    const getProductsPagi = async () => {
      setIsLoad(true);
      try {
        const res = await axios.get(URL_API);
        setProducts(res.data);
        setFilteredProducts(res.data);
        setSearchedProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductsPagi();
  }, [isLoad, currentPage, limit]);
  const filterProducts = () => {
    if (valueFilter !== "null") {
      setFilteredProducts(
        products.filter((product) => product.classify === valueFilter)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const searchProducts = () => {
    setSearchedProducts(
      filteredProducts.filter((product) =>
        Object.keys(product).some((key) =>
          product[key]
            .toString()
            .toLowerCase()
            .includes(valueSearch.toLowerCase())
        )
      )
    );
  };

  useEffect(() => {
    filterProducts();
  }, [valueFilter, products]);

  useEffect(() => {
    searchProducts();
  }, [valueSearch, filteredProducts]);

  const { cart, loadActAdd, success, log, addToCart, setLog } =
    actionAddToCart();
  const handleAddToCart = (e) => {
    const idAdd = e.target.value;
    addToCart(idAdd);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      {loadActAdd && <LoadingPopup />}
      {success && <SuccessPopup />}
      {log && <LoginPopup setLog={setLog} router={router} />}
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
                onChange={(e) => setValueSearch(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Tìm sản phẩm"
                required
              />
            </div>
            <button
              type="submit"
              onClick={searchProducts}
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
              value={valueFilter}
              onChange={(e) => setValueFilter(e.target.value)}
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
            {searchedProducts.map((dt, id) => (
              <li key={id} className="item mx-[10px] my-[15px]">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                  <button className="relative">
                    <img
                      className="p-8 rounded-t-lg w-full"
                      src={dt.imgItem}
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
                    <div className="flex flex-col">
                      <span className="text-base font-extralight text-gray-900 dark:text-white line-through">
                        {formatPrice(dt.price)} VND
                      </span>
                      <span className="text-lg font-medium">
                        {formatPrice(dt.price - (dt.price * dt.endow) / 100)}{" "}
                        VND
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap">
                      <button
                        onClick={handleAddToCart}
                        value={dt.id}
                        className="flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Thêm vào giỏ hàng
                      </button>
                      {!isLogIn ? <AlertLogin /> : <FormOrder idPro={dt?.id} />}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lengthPagination={lenghtPage}
        />
      </div>
      <Footer />
      {isLoad && <LoadingPopup />}
    </>
  );
};

export default ProductsPage;
