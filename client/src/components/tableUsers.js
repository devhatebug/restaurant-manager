import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/components/pagination";
import FormEditUser from "./formEditUser";
const TableUsers = (props) => {
    const URL_API = `http://127.0.0.1:8080/api-users/user`;
    const [isOpenFormEdit, setIsOpenFormEdit] = useState(false);
    const [idUser, setIdUser] = useState(0);
    const [userSelector, setUserSelector] = useState([]);
    const [dataUsers, setDataUsers] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [lengthPagination, setLengthPagination] = useState(0);
    const limit = 2;
    const offset = (currentPage - 1) * limit;

    const getUsers = async () => {
        try {
            const res = await axios.get(`${URL_API}?offset=${offset}&limit=${limit}`);
            setDataUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${URL_API}s`);
            const lengthData = res.data.length;
            setLengthPagination(Math.ceil(lengthData / limit));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateUser = (e) => {
        setIdUser(e.target.value)
        setIsOpenFormEdit(true);
    };

    const getUserById = async() => {
        try {
            const res = await axios.get(`${URL_API}s/${idUser}`)
            setUserSelector(res.data);
        }
        catch(err) {
            console.log(err);
        }
    };

    const closeForm = () => {
        setIsOpenFormEdit(false);
    }

    useEffect(() => {
        getUserById();
    },[idUser])

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    useEffect(() => {
        getAllUsers();
    }, []);
    return(
        <>
        <button type="button" className="mb-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> </g>
                </svg>
                Thêm người mới
        </button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">mã user</th>
                        <th scope="col" className="px-6 py-3">tên gọi</th>
                        <th scope="col" className="px-6 py-3">địa chỉ</th>
                        <th scope="col" className="px-6 py-3">điện thoại</th>
                        <th scope="col" className="px-6 py-3">vai trò</th>
                        <th scope="col" className="px-6 py-3">tên đăng nhập</th>
                        <th scope="col" className="px-6 py-3">mật khẩu</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(dataUsers.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.codeUser}</th>
                            <td className="px-6 py-4">{user.nameUser}</td>
                            <td className="px-6 py-4">{user.address}</td>
                            <td className="px-6 py-4">{user.phone}</td>
                            <td className="px-6 py-4">{user.roleUser}</td>
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.pass}</td>
                            <td className="flex items-center px-6 py-4">
                                <button value={user.id} onClick={handleUpdateUser} className="font-medium text-blue-600 hover:underline">Edit</button>
                                <button className="font-medium text-red-600 hover:underline ms-3">Remove</button>
                            </td>
                        </tr>
                    )))}
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
        {isOpenFormEdit && 
        <div className="fixed inset-0 flex items-center justify-center ml-0 sm:ml-[260px] px-[10px]">
            <div className="animate-openingPopup w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg px-[20px] py-[20px]">
                <FormEditUser onClose={closeForm} dataUser={userSelector} />
            </div>
        </div>
        }
        </>
    )
}

export default TableUsers;