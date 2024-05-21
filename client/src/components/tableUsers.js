import React, { useEffect, useState } from "react";
import axios from "axios";

const TableUsers = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8080/api-users/users');
            setDataUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            mã user
                        </th>
                        <th scope="col" className="px-6 py-3">
                            tên gọi
                        </th>
                        <th scope="col" className="px-6 py-3">
                            địa chỉ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            điện thoại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            vai trò
                        </th>
                        <th scope="col" className="px-6 py-3">
                            tên đăng nhập
                        </th>
                        <th scope="col" className="px-6 py-3">
                            mật khẩu
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(dataUsers.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {user.codeUser}
                            </th>
                            <td className="px-6 py-4">
                                {user.nameUser}
                            </td>
                            <td className="px-6 py-4">
                                {user.address}
                            </td>
                            <td className="px-6 py-4">
                                {user.phone}
                            </td>
                            <td className="px-6 py-4">
                                {user.roleUser}
                            </td>
                            <td className="px-6 py-4">
                                {user.username}
                            </td>
                            <td className="px-6 py-4">
                                {user.pass}
                            </td>
                            <td className="flex items-center px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 hover:underline ms-3">Remove</a>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    )
}

export default TableUsers;