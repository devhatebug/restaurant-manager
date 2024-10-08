"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./pagination";
import FormAddProduct from "./formAddProduct";
import FormEditProduct from "./formEditProduct";
import formatPrice from "@/utils/formatPrice";

const TableProducts = ({
  products,
  middleCheck,
  setMiddleCheck,
  lengthPagination,
  limit,
  setIsSuccess,
  setIsErr,
  setAddErr,
  setAddFinish,
  isSearch,
  dataSearched,
  setIsSearch,
  onClose
}) => {
  const URL_API = `http://127.0.0.1:8080/api-menu/products`;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataProducts, setDataProducts] = useState([]);
  const offset = (currentPage - 1) * limit;
  const [isOpenFormAdd, setIsOpenFormAdd] = useState(false);
  const [isOpenFormEdit, setIsOpenFormEdit] = useState(false);
  const [isReload, setIsReload] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);
  const [productSelected, setProductSeleted] = useState([]);
  const handleOpenFormEdit = async (e) => {
    const idProduct = e.target.value;
    try {
      const productSelected = await axios.get(
        `http://127.0.0.1:8080/api-menu/menu/${idProduct}`
      );
      setProductSeleted(productSelected.data);
      setIsOpenFormEdit(true);
      setIsSearch(false);
    } catch (err) {
      console.log(err);
    }
  };
  const closeFormEdit = () => {
    setIsOpenFormEdit(false);
  };
  useEffect(() => {
    if (dataFilter !== "" && dataFilter !== "null") {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [dataFilter]);
  useEffect(() => {
    products &&
      setProductsFilter(
        products.filter((product) => product.classify === dataFilter)
      );
  }, [dataFilter]);
  useEffect(() => {
    if (isFilter) {
      if (Array.isArray(productsFilter) && productsFilter.length) {
        setDataProducts(productsFilter);
      } else {
        setDataProducts([]);
      }
    } else {
      setIsReload(1);
      setIsFilter(false);
    }
  }, [isFilter, productsFilter]);
  const openFormAdd = () => {
    setIsOpenFormAdd(true);
  };
  const closeFormAdd = () => {
    setIsOpenFormAdd(false);
  };
  const getProducts = async () => {
    try {
      const res = await axios.get(`${URL_API}?offset=${offset}&limit=${limit}`);
      setDataProducts(res.data);
      setIsReload(0);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    middleCheck === 0 && setIsReload(0);
    middleCheck === 1 && setIsReload(1);
  }, [middleCheck]);
  useEffect(() => {
    getProducts();
  }, [currentPage, limit, isReload]);
  const handleDeleteProduct = async (e) => {
    const idProduct = e.target.value;
    try {
      await axios.delete(
        `http://127.0.0.1:8080/api-menu/delete-menu/${idProduct}`
      );
      setMiddleCheck(1);
      setIsSearch(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex item-center justify-between flex-wrap">
        <button
          onClick={openFormAdd}
          type="button"
          className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            width="20px"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
          Thêm sản phẩm
        </button>
        <div className="flex items-center mb-[20px]">
          <label
            className="w-[80px] p-[5px] font-medium text-sm"
            htmlFor="category"
          >
            Bộ lọc
          </label>
          <select
            value={dataFilter}
            onChange={(e) => setDataFilter(e.target.value)}
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Giá gốc
              </th>
              <th scope="col" className="px-6 py-3">
                danh mục
              </th>
              <th scope="col" className="px-6 py-3">
                giảm giá
              </th>
              <th scope="col" className="px-6 py-3">
                giá bán
              </th>
              <th scope="col" className="px-6 py-3">
                món mới
              </th>
              <th scope="col" className="px-6 py-3">
                món ưa thích
              </th>
              <th scope="col" className="px-6 py-3">
                món bán chạy
              </th>
              <th scope="col" className="px-6 py-3">
                trạng thái
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataProducts.map((dt, id) => (
              <tr key={id} className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
                >
                  {dt.nameItem}
                </th>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {formatPrice(dt.price) + "đ"}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.classify === "main meal" && "Đồ ăn bữa chính"}
                  {dt.classify === "snack" && "Đồ ăn vặt"}
                  {dt.classify === "barbecue" && "Đồ nướng"}
                  {dt.classify === "fried" && "Đồ chiên"}
                  {dt.classify === "steamed" && "Đồ hấp"}
                  {dt.classify === "drink" && "Đồ uống"}
                  {dt.classify === "desert" && "Tráng miệng"}
                  {dt.classify === "other" && "Khác"}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.endow}%
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {formatPrice(dt.price - (dt.price * dt.endow) / 100) + "đ"}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.isNew === false ? `✗` : `✓`}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.isHot === false ? `✗` : `✓`}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.isSeller === false ? `✗` : `✓`}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {dt.statusItem === true ? `Còn hàng` : `Hết hàng`}
                </td>
                <td className="flex items-center px-6 py-4">
                  <button
                    value={dt.id}
                    onClick={handleOpenFormEdit}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    value={dt.id}
                    onClick={handleDeleteProduct}
                    className="font-medium text-red-600 hover:underline ms-3"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-[30px]">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lengthPagination={lengthPagination}
        />
      </div>
      {isOpenFormAdd && (
        <FormAddProduct
          onClose={closeFormAdd}
          setMiddleCheck={setMiddleCheck}
          setIsErr={setIsErr}
          setIsSuccess={setIsSuccess}
        />
      )}
      {isOpenFormEdit && (
        <FormEditProduct
          onClose={closeFormEdit}
          dataProduct={productSelected}
          setMiddleCheck={setMiddleCheck}
          products={products}
          setAddErr={setAddErr}
          setAddFinish={setAddFinish}
        />
      )}
      {isSearch && (
        <div className="fixed inset-0 flex items-center justify-center ml-0 sm:ml-[260px] px-[10px]">
          <div className="animate-openingPopup w-[auto] h-[auto] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-2xl px-[20px] py-[20px]">
            <button
              onClick={onClose}
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
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
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>Giá gốc</th>
                  <th>Danh mục</th>
                  <th>Giảm giá</th>
                  <th>Giá bán</th>
                  <th>Món mới</th>
                  <th>Món ưa thích</th>
                  <th>Món bán chạy</th>
                  <th>Trạng thái</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataSearched.map((dt, id) => (
                  <tr key={id}>
                    <th>{dt.nameItem}</th>
                    <td>{formatPrice(dt.price) + "đ"}</td>
                    <td>
                      {dt.classify === "main meal" && "Đồ ăn bữa chính"}
                      {dt.classify === "snack" && "Đồ ăn vặt"}
                      {dt.classify === "barbecue" && "Đồ nướng"}
                      {dt.classify === "fried" && "Đồ chiên"}
                      {dt.classify === "steamed" && "Đồ hấp"}
                      {dt.classify === "drink" && "Đồ uống"}
                      {dt.classify === "desert" && "Tráng miệng"}
                      {dt.classify === "other" && "Khác"}
                    </td>
                    <td>{dt.endow}%</td>
                    <td>
                      {formatPrice(dt.price - (dt.price * dt.endow) / 100) +
                        "đ"}
                    </td>
                    <td>{dt.isNew === false ? `✗` : `✓`}</td>
                    <td>{dt.isHot === false ? `✗` : `✓`}</td>
                    <td>{dt.isSeller === false ? `✗` : `✓`}</td>
                    <td>{dt.statusItem === true ? `Còn hàng` : `Hết hàng`}</td>
                    <td>
                      <button
                        value={dt.id}
                        onClick={handleOpenFormEdit}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        value={dt.id}
                        onClick={handleDeleteProduct}
                        className="font-medium text-red-600 hover:underline ms-3"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default TableProducts;
