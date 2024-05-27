'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

const FormEditUser = ({onClose, dataUser}) => {
    if (!dataUser || dataUser.length === 0) return null;
    const data = dataUser[0];
    return(
    <div>
        <div className="flex items-center py-6">
            <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                <img className="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload"/>
            </div>
            <label className="cursor-pointer ">
                <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                <input type="file" className="hidden"/>
            </label>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name User</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data.nameUser} required />
            </div>
            <div>
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                <select defaultValue={data.roleUser} id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value={`${data.roleUser === 'người dùng' ? "user" : "admin"}`}>{data.roleUser}</option>
                    {data.roleUser === "admin" ?
                        <option value="user">user</option> :
                        <option value="admin">admin</option>
                    }
                </select>
            </div>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data.username} required />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data.pass} required />
            </div>
            <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data.address} required />
            </div>  
            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-[10px] mb-[10px]">Submit</button>
        <button onClick={onClose} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cancel</button>
    </div>

    )
}

export default FormEditUser;