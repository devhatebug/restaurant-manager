'use client'
import React, { useState, useEffect } from "react";
import TableProducts from "@/components/tableProducts";
import axios from "axios";

const Product = () => {
    const URL_API = `http://127.0.0.1:8080/api-menu/menu`;
    const [dataProducts, setDataProducts] = useState();
    const [middleCheck, setMiddleCheck] = useState(0);
    const [lengthPagination, setLengthPagination] = useState();
    const limit = 10;
    const getAllProducts = async() => {
        try {
            const res = await axios.get(`${URL_API}`);
            setDataProducts(res.data);
            const lenghtAllProducts = res.data.length;
            setLengthPagination(Math.ceil(lenghtAllProducts / limit));
            setMiddleCheck(0);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllProducts();
    }, [middleCheck]);
    return(
        <div className="products ml-0 sm:ml-[260px] pl-[10px] pr-[10px]">
            <div className="flex items-center justify-between pt-[30px] mb-[50px]">
                <div className="title-page">
                    <h4 className="font-semibold sm:text-2xl text-base">Danh sách sản phẩm</h4>
                </div>
                <div className="search-box">
                    <div className="flex items-center max-w-sm mx-auto">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Tìm kiếm sản phẩm" required />
                        </div>
                        <button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
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
                />
            </div>

        </div>
    )
}

export default Product;