"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import getAuth from "@/utils/getAuthor";
import fetchUser from "@/utils/fetchUser";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
      setCart(dataUserLog?.cart || []);
      const length = dataUserLog?.cart?.length;
      if (length) {
        setCartLength(length);
      }
    }
  }, [isLogIn, userId, setUserId, dataUserLog]);
  return (
    <CartContext.Provider value={{ cart, setCart, cartLength, setCartLength }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
