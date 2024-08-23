"use client";
import React, { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";
import { useCart } from "@/context/cartContext";
import logOutAcc from "@/utils/logOut";
import { message} from "antd";
const Navbar = () => {
  const router = useRouter();
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [errOut, setErrOut] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng xuất thành công!",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Xãy ra lỗi không mong muốn",
    });
  };
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
    }
  }, [isLogIn, userId, setUserId]);
  const nameAuthor = dataUserLog?.nameUser;
  const {cartLength} = useCart();
  const handleLogOut = () => {
    const statusOut = logOutAcc(setErrOut);
    if (statusOut === true) {
      window.location.href = "/";
      success();
    }
    if (errOut === false && statusOut === false) {
      error();
    }
  };
  return (
    <>
    {contextHolder}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Dev Restaurant
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                <span className="badge badge-sm indicator-item">
                  {cartLength}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cartLength} sản phẩm</span>
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
                <div className="w-auto font-medium underline">{nameAuthor}</div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    onClick={() => router.push("/profile")}
                    className="justify-between"
                  >
                    Trang cá nhân
                  </button>
                </li>
                <li>
                  <button onClick={handleLogOut}>Đăng xuất</button>
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
    </>
  );
};

export default Navbar;
