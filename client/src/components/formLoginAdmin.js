"use client";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
const FormLoginAdmin = () => {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [notiErr, setNotiErr] = useState(false);
  const [messageErr, setMessageErr] = useState("");

  const getUserName = (e) => {
    setUserName(e.target.value);
    setNotiErr(false);
  };

  const getPassWord = (e) => {
    setPassWord(e.target.value);
    setNotiErr(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/login",
        {
          username: username,
          password: password,
        }
      );
      const { token } = response.data;
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.roleUser == "admin") {
          Cookies.set("tokenAdmin", token, { expires: 7 });
          router.push("/admin");
        } else {
          setMessageErr("Tài khoản này không phải là tài khoản admin");
          setNotiErr(true);
        }
      } catch (decodeError) {
        setMessageErr("Invalid token received");
        console.error(decodeError)
        setNotiErr(true);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      setMessageErr(errorMessage);
      setNotiErr(true);
    }
  };

  return (
    <>
      {notiErr && (
        <div
          className="animate-slideInRight absolute bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 top-0 right-0"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{messageErr}</p>
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập để có quyền truy cập
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  onChange={getUserName}
                  required
                  className="pl-[10px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={getPassWord}
                  required
                  className="pl-[10px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

module.exports = FormLoginAdmin;
