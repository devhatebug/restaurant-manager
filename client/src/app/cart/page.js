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
import LoadingPopup from "@/components/loadingPopup";
import { Button, message } from "antd";
import axios from "axios";
const CartPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const { cart, setCart, setCartLength } = useCart();
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [price, setPrice] = useState(0);
  const [endow, setEndow] = useState(0);
  useEffect(() => {
    if (cart) {
      const price = cart.reduce((accumulator, pro) => {
        return accumulator + pro?.price * pro?.quantity;
      }, 0);
      setPrice(price);
      const endow = cart.reduce((accumulator, pro) => {
        const price = pro?.price * pro?.quantity || 0;
        const endow = pro?.endow || 0;
        return accumulator + (price * endow) / 100;
      }, 0);
      setEndow(endow);
    }
  }, [cart])
  
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
    }
  }, [isLogIn, setUserId, userId]);
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Xoá thành công");
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
      cart: cart.filter((item) => String(item.id) !== String(id)),
    };
    setIsLoad(true);
    try {
      await axios.put(
        "http://127.0.0.1:8080/api-users/update-user/",
        updatedData
      );
      setCart((prevCart) => {
        const updatedCart = prevCart.filter(
          (item) => String(item.id) !== String(id)
        );
        console.log(updatedCart);
        return updatedCart;
      });
      setCartLength((prevCartLength) => prevCartLength - 1);
      setIsLoad(false);
      info();
    } catch (err) {
      console.log(err);
      alert("Đã xảy ra lỗi khi cập nhật");
    }
  };
  const apartNum = async (e) => {
    const id = e.target.value;
    const newCart = cart.map((item) => {
      return String(item.id) === id ? {...item, quantity: item.quantity - 1} : item
    });
    const dataAuthor = {
      idUser: dataUserLog?.id,
      codeUser: dataUserLog?.codeUser,
      name: dataUserLog?.nameUser,
      username: dataUserLog?.username,
      pass: dataUserLog?.pass,
      address: dataUserLog?.address,
      phone: dataUserLog?.phone,
      role: dataUserLog?.roleUser,
      avt: dataUserLog?.avtUser,
      cart: newCart,
    }
    try {
      await axios.put(
        "http://127.0.0.1:8080/api-users/update-user/",
        dataAuthor
      );
      setCart(newCart);
    } catch(err) {
      console.log(err);
    }
  };
  const addNum = async(e) => {
    const id = e.target.value;
    const newCart = cart.map((item) => {
      return String(item.id) === id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
    const dataAuthor = {
      idUser: dataUserLog?.id,
      codeUser: dataUserLog?.codeUser,
      name: dataUserLog?.nameUser,
      username: dataUserLog?.username,
      pass: dataUserLog?.pass,
      address: dataUserLog?.address,
      phone: dataUserLog?.phone,
      role: dataUserLog?.roleUser,
      avt: dataUserLog?.avtUser,
      cart: newCart,
    };
    try {
      await axios.put(
        "http://127.0.0.1:8080/api-users/update-user/",
        dataAuthor
      );
      setCart(newCart);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      {isLoad && <LoadingPopup />}
      {contextHolder}
      <div className="pt-20 mb-[-10px] min-h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">Giỏ hàng</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((dt, id) => {
              return (
                <div
                  key={id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={blobtoBase64(dt.imgItem)}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {dt.nameItem}
                      </h2>
                      <p className="mt-1 text-base text-gray-700">
                        {dt.classify === "main meal" && "Đồ ăn bữa chính"}
                        {dt.classify === "snack" && "Đồ ăn vặt"}
                        {dt.classify === "barbecue" && "Đồ nướng"}
                        {dt.classify === "fried" && "Đồ chiên"}
                        {dt.classify === "steamed" && "Đồ hấp"}
                        {dt.classify === "drink" && "Đồ uống"}
                        {dt.classify === "desert" && "Tráng miệng"}
                        {dt.classify === "other" && "Khác"}
                      </p>
                      <div className="mt-[10px] animate-textFlick">
                        Giảm giá:{" "}
                        <span className="font-semibold">{dt.endow}%</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 flex-col items-end">
                      <div className="flex items-center border-gray-100 ml-[25px] mb-[10px] ">
                        <button
                          type="button"
                          disabled={dt?.quantity <= 1}
                          onClick={apartNum}
                          value={dt.id}
                          className="rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          -
                        </button>
                        <button
                          className="h-8 w-8 border bg-white text-center text-xs outline-none text-zinc-950"
                          type="number"
                          min="1"
                        >
                          {dt?.quantity}
                        </button>
                        <button
                          value={dt.id}
                          type="button"
                          onClick={addNum}
                          className="rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center space-x-4 line-through">
                        <p className="text-sm">{formatPrice(dt.price)}đ</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-lg font-bold mt-[-20px]">
                          {formatPrice(dt.price - dt.price * (dt.endow / 100))}đ
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleDeletePro}
                        value={dt.id}
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-3 py-1.5 text-center me-2"
                      >
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
