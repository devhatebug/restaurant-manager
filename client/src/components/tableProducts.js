'use client'
import React, {useState} from "react";
import axios from "axios";
import Pagination from "./pagination";

const TableProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [lengthPagination, setLengthPagination] = useState(3);
    return(
        <>
        <div className="flex item-center justify-between flex-wrap">
            <button type="button" className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> </g>
                </svg>
                Thêm sản phẩm 
            </button>
            <div className="flex items-center mb-[20px]">
                <label className="w-[80px] p-[5px] font-medium text-sm" htmlFor="category">Bộ lọc</label>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
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
                            đánh giá
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
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            3.0 lb.
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            3.0 lb.
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <button className="font-medium text-blue-600 hover:underline">Edit</button>
                            <button className="font-medium text-red-600 hover:underline ms-3">Remove</button>
                        </td>
                    </tr>
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
        </>
    )
}

export default TableProducts;