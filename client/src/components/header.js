"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import getAllUsers from "@/utils/getAllUser";
const Navbar = () => {
  const router = useRouter();
  const [isLogIn, setIsLogIn] = useState(false);
  const [username, setUserName] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [dataUserLog, setDataUserLog] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setAllUsers(users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const token = Cookies.get("tokenUser");
    if (token) {
      setIsLogIn(true);
      try {
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.username);
      } catch (error) {
        console.error("Failed to decode token:", error);
        setIsLogIn(false);
      }
    } else {
      setIsLogIn(false);
    }
  }, []);
  useEffect(() => {
    const founded = allUsers.find((users) => users.username === username);
    setDataUserLog(founded);
    console.table(dataUserLog)
  }, [username, allUsers])
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Dev Restaurant
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button
                  onClick={() => {
                    router.push("/cart");
                  }}
                  className="btn btn-primary btn-block"
                >
                  Xem giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* profile */}
        {isLogIn && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="mx-[10px]">
              <div className="w-auto font-medium underline">{dataUserLog.nameUser}</div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
        {!isLogIn && (
          <div className="text-sm font-medium p-[5px]">
            <a href="/login">Đăng nhập</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
