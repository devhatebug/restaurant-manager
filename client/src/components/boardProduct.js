import React, { useEffect, useState } from "react";
import axios from "axios";
import { blobtoBase64 } from "@/utils/toBase64";
import formatPrice from "@/utils/formatPrice";

const BoardProducts = () => {
  const URL_API = `http://127.0.0.1:8080/api-menu/menu`;
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [proEndow, setProEndow] = useState([]);
  const [proNew, setProNew] = useState([]);
  const [proSell, setProSell] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(URL_API);
        setDataProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const proEndow = dataProducts.filter((pro) => pro.endow > 0);
    const proNew = dataProducts.filter((pro) => pro.isNew === true);
    const proSell = dataProducts.filter((pro) => pro.isSeller === true);
    setProEndow(proEndow);
    setProNew(proNew);
    setProSell(proSell);
  }, [dataProducts]);

  return (
    <div className="flex flex-col my-[30px] px-[20px]">
      <div className="category my-[20px]">
        <div className="title font-semibold text-xl uppercase">
          <h4>Sản phẩm giảm giá</h4>
        </div>
        <div className="listProducts">
          <ul className="listItem flex flex-wrap items-center justify-center">
            {isLoading && (
              <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            )}
            {proEndow.map((dt, id) => (
              <li key={id} className="item mx-[15px] my-[15px]">
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
                    <div className="flex items-center justify-between">
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
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="category my-[20px]">
        <div className="title font-semibold text-xl uppercase">
          <h4>Sản phẩm mới</h4>
        </div>
        <div className="listProducts">
          <ul className="listItem flex flex-wrap items-center justify-center">
            {isLoading && (
              <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            )}
            {proNew.map((dt, id) => (
              <li key={id} className="item mx-[15px] my-[15px]">
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
                    <div className="flex items-center justify-between">
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
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="category my-[20px]">
        <div className="title font-semibold text-xl uppercase">
          <h4>Sản phẩm bán chạy</h4>
        </div>
        <div className="listProducts">
          <ul className="listItem flex flex-wrap items-center justify-center">
            {isLoading && (
              <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            )}
            {proSell.map((dt, id) => (
              <li key={id} className="item mx-[15px] my-[15px]">
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
                    <div className="flex items-center justify-between">
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
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoardProducts;