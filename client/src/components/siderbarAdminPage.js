"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
const SiderBarAdminPage = () => {
 const router = useRouter();
 const pathname = usePathname();
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isFollow, setIsFollow] = useState(true);
 if (pathname === "/admin/login") {
   return null;
 }

 const toggleFollow = () => {
   setIsFollow(!isFollow);
 };

 const openSidebar = () => {
   setIsSidebarOpen(true);
 };

 const closeSidebar = () => {
   setIsSidebarOpen(false);
 };

 const handleLogOut = () => {
  Cookies.remove('tokenAdmin');
  const checkCookie = Cookies.get('tokenAdmin');
  if(!checkCookie) {
    router.push('/admin/login');
  }
 }
  return (
    <>
      <button
        onClick={openSidebar}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          {isSidebarOpen && (
            <button
              onClick={closeSidebar}
              className="mb-[10px] right-[-40px] absolute"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          <div className="flex items-center ps-2.5 mb-5 cursor-pointer">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Adminstator
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            <li className="cursor-pointer">
              <div
                onClick={toggleFollow}
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Theo dõi đơn
                </span>
                {isFollow ? (
                  <span>
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z"
                        fill="white"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                        fill="white"
                      />
                    </svg>
                  </span>
                )}
              </div>
              {isFollow && (
                <ul className="text-sm max-w-md space-y-1 text-gray-400">
                  <li
                    className={`cursor-pointer hover:bg-gray-700 p-[5px] rounded-lg ml-[40px] ${
                      pathname === "/admin/new-order" && "bg-gray-700"
                    }`}
                  >
                    <a href="/admin/new-order">
                      <div>Đơn mới</div>
                    </a>
                  </li>
                  <li
                    className={`cursor-pointer hover:bg-gray-700 p-[5px] rounded-lg ml-[40px] ${
                      pathname === "/admin/processing-order" && "bg-gray-700"
                    }`}
                  >
                    <a href="/admin/processing-order">
                      <div>Đơn đang thực hiện</div>
                    </a>
                  </li>
                  <li
                    className={`cursor-pointer hover:bg-gray-700 p-[5px] rounded-lg ml-[40px] ${
                      pathname === "/admin/paid-order" && "bg-gray-700"
                    }`}
                  >
                    <a href="/admin/paid-order">
                      <div>Đơn đã thanh toán</div>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer">
              <a
                href="/admin/users"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group ${
                  pathname === "/admin/users" && "bg-slate-900"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Quản lí người dùng
                </span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="/admin/product"
                className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group ${
                  pathname === "/admin/product" && "bg-slate-900"
                }`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Quản lí sản phẩm
                </span>
              </a>
            </li>
            <li className="cursor-pointer">
              <button
                onClick={handleLogOut}
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Đăng xuất</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SiderBarAdminPage;
