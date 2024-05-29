'use client'
import React, { useEffect, useState } from "react";
import TableUsers from "@/components/tableUsers";
import axios from "axios";
import { blobtoBase64 } from "@/utils/toBase64";
import FormEditUser from "@/components/formEditUser";
const Users = () => {
    const URL_API = `http://127.0.0.1:8080/api-users/user`;
    const [dataUsers, setDataUsers] = useState([]);
    const [dataSearch, setDataSearch] = useState('');
    const [userSearched, setUserSearched] = useState(null);
    const [isCard, setIsCard] = useState(false);
    const [isAlertSearch, setIsAlertSearch] = useState(false);
    const [dataFileImg, setDataFileImg] = useState();
    const [isChangeData, setIsChangeData] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const getUsers = async () => {
        try {
            const res = await axios.get(`${URL_API}s`);
            setIsChangeData(0);
            setDataUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, [isChangeData]);

    const getValueSearch = (e) => {
        setDataSearch(e.target.value);
    };

    const searchUser = () => {
        if(dataSearch == "") {
            setIsAlertSearch(true);
        }
        if(dataSearch != null && dataSearch != "") {
            const foundUser = dataUsers.find((user) => user.username === dataSearch);
            setUserSearched(foundUser);
            setIsCard(true);
        }
    };

    useEffect(() => {
        dataSearch != null && setIsAlertSearch(false)
    }, [dataSearch])

    const closeCard = () => {
        setIsCard(false);
    }

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditFormOpen(true);
    };

    const handleCloseEditForm = () => {
        setIsEditFormOpen(false);
    };

    return(
       <div className="users ml-0 sm:ml-[260px] pl-[10px] pr-[10px]">
            <div className="flex items-center justify-between pt-[30px] mb-[50px]">
                <div className="title-page">
                    <h4 className="font-semibold sm:text-2xl text-base">Danh sách người dùng</h4>
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
                            <input onChange={getValueSearch} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Nhập Username ..." required />
                        </div>
                        <button onClick={searchUser} className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="table-users mb-[30px]">
                <TableUsers handleChangeData={setIsChangeData} />
            </div>

        {isCard && 
        <>
            <div className="fixed inset-0 flex items-center justify-center ml-0 sm:ml-[260px]">
                <div className="animate-openingPopup w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button onClick={closeCard} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                            <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#7B7B7B "></path> 
                            <path d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z" fill="#7B7B7B "></path> 
                            </g>
                            </svg>
                    </button>
                    {userSearched != null ? 
                    <div className="animate-openingPopup flex flex-col items-center pb-10 z-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={blobtoBase64(userSearched.avtUser)} alt="User Avatar"/>
                        <h5 className="mb-1 text-xl font-semibold text-gray-900 uppercase">{userSearched.nameUser}</h5>
                        <span className="text-sm text-gray-500"><strong>Code user: </strong>{userSearched.codeUser}</span>
                        <span className="text-sm text-gray-500"><strong>Username: </strong>{userSearched.username}</span>
                        <span className="text-sm text-gray-500"><strong>Password: </strong>{userSearched.pass}</span>
                        <span className="text-sm text-gray-500"><strong>Phone: </strong>{userSearched.phone}</span>
                        <span className="text-sm text-gray-500"><strong>Address: </strong>{userSearched.address}</span>
                        <span className="text-sm text-gray-500"><strong>Role: </strong>{userSearched.roleUser}</span>
                        <div className="flex mt-4 md:mt-6">
                            <button onClick={() => handleEditClick(userSearched)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Edit</button>
                            <button className="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-red-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Delete</button>
                        </div>
                    </div> :
                    <div className="mt-[10px] z-0 px-[20px]">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900">Không tìm thấy nội dung</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg">Chúng tôi không tìm thấy người dùng nào có username là <strong>@{dataSearch}</strong></p>
                    </div>
                    }
                </div>
                
            </div>
            {isEditFormOpen && <FormEditUser user={selectedUser} onClose={handleCloseEditForm} />}
            </>
            }
            {isAlertSearch && 
                <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 absolute bottom-0 right-0" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Chú ý:</span> Vui lòng nhập nội dung cần tìm kiếm
                    </div>
                </div>
            }
       </div>
    )
}

export default Users;