import { useState, useEffect } from "react";
import axios from "axios";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";

const actionOrder = () => {
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
    }
  }, [userId, setUserId, dataUserLog, isLogIn]);

  const FormContainer = () => (
    <div className="max-w-md mx-auto mt-[30px]">
      <div className="relative z-0 w-full mb-5 group">
        <div className="mb-6">
          <label
            htmlFor="nameClient"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tên người nhận
          </label>
          <input
            type="text"
            id="nameClient"
            placeholder={dataUserLog?.nameUser}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <div className="mb-6">
          <label
            htmlFor="phoneClient"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Số điện thoại người nhận
          </label>
          <input
            type="text"
            id="phoneClient"
            placeholder={dataUserLog?.phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <div className="mb-6">
          <label
            htmlFor="dispatch"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Địa chỉ nhận hàng
          </label>
          <input
            type="text"
            id="dispatch"
            placeholder={dataUserLog?.address}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ghi chú
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nhập ghi chú cho chúng tôi..."
        ></textarea>
      </div>
    </div>
  );

  return {
    FormContainer,
  };
};

export default actionOrder;
