"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { blobtoBase64 } from "@/utils/toBase64";
import { useCart } from "@/context/cartContext";
import formatPrice from "@/utils/formatPrice";
import FormOrder from "@/components/formOrderCard";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";
import axios from "axios";
const CartPage = () => {
  const { cart, setCart, setCartLength } = useCart();
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [data, setData] = useState();
  const price = cart.reduce((accumulator, pro) => {
    return accumulator + pro[0]?.price;
  }, 0);
  const endow = cart.reduce((accumulator, pro) => {
    const price = pro[0]?.price || 0;
    const endow = pro[0]?.endow || 0;
    return accumulator + (price * endow) / 100;
  }, 0);
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
    }
  }, [isLogIn, setUserId, userId]);
  useEffect(() => {
    const updatedData = {
      idUser: dataUserLog?.id,
      codeUser: dataUserLog?.codeUser,
      name: dataUserLog?.nameUser,
      username: dataUserLog?.username,
      pass: dataUserLog?.pass,
      address: dataUserLog?.address,
      phone: dataUserLog?.phone,
      role: dataUserLog?.roleUser,
      avt: dataUserLog?.avtUser,
      cart: cart,
    };
    setData(updatedData);
    setCartLength(cart.length);
  }, [cart, setCartLength, dataUserLog]);
  console.log(data);
  const updateUser = async () => {
    if (!data) return;
    try {
      await axios.put("http://127.0.0.1:8080/api-users/update-user/", data);
      alert("Cập nhật thành công");
    } catch (err) {
      console.log(err);
      alert("Đã xảy ra lỗi khi cập nhật");
    }
  };
  const handleDeletePro = async (e) => {
    const id = e.target.value;

    const updatedData = {
      idUser: dataUserLog?.id,
      codeUser: dataUserLog?.codeUser,
      name: dataUserLog?.nameUser,
      username: dataUserLog?.username,
      pass: dataUserLog?.pass,
      address: dataUserLog?.address,
      phone: dataUserLog?.phone,
      role: dataUserLog?.roleUser,
      avt: dataUserLog?.avtUser,
      cart: cart.filter((item) => String(item[0].id) !== String(id)),
    };
    // hien Loađinh
    try {
      await axios.put(
        "http://127.0.0.1:8080/api-users/update-user/",
        updatedData
      );
      alert("Cập nhật thành công");
      // xoa loading

      setCart((prevCart) => {
        const updatedCart = prevCart.filter(
          (item) => String(item[0].id) !== String(id)
        );
        return updatedCart;
      });
    } catch (err) {
      console.log(err);
      alert("Đã xảy ra lỗi khi cập nhật");
    }

  };

  return (
    <>
      <Navbar />
      <div className="pt-20 mb-[-10px]">
        <h1 className="mb-10 text-center text-2xl font-bold">Giỏ hàng</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((dt, id) => (
              <div
                key={id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={blobtoBase64(dt[0].imgItem)}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {dt[0].nameItem}
                    </h2>
                    <p className="mt-1 text-base text-gray-700">
                      {dt[0].classify === "main meal" && "Đồ ăn bữa chính"}
                      {dt[0].classify === "snack" && "Đồ ăn vặt"}
                      {dt[0].classify === "barbecue" && "Đồ nướng"}
                      {dt[0].classify === "fried" && "Đồ chiên"}
                      {dt[0].classify === "steamed" && "Đồ hấp"}
                      {dt[0].classify === "drink" && "Đồ uống"}
                      {dt[0].classify === "desert" && "Tráng miệng"}
                      {dt[0].classify === "other" && "Khác"}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 flex-col items-end">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none text-zinc-950"
                        type="number"
                        defaultValue={2}
                        min="1"
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{formatPrice(dt[0].price)}đ</p>
                      <button onClick={handleDeletePro} value={dt[0].id}>
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Giá thành</p>
              <p className="text-gray-700">{formatPrice(price)}đ</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Giảm giá</p>
              <p className="text-gray-700">{formatPrice(endow)}đ</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Tổng</p>
              <div className="flex flex-col items-end">
                <p className="mb-1 text-lg font-bold right-0">
                  {formatPrice(price - endow)}đ
                </p>
                <p className="text-sm text-gray-700">-- Chưa phí ship --</p>
              </div>
            </div>
            <FormOrder cart={cart} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
