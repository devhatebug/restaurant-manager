import { useState, useEffect } from "react";
import axios from "axios";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";
import { useCart } from "@/context/cartContext";

const actionAddToCart = () => {
  const { dataUserLog, setUserId, loading } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [loadActAdd, setLoadActAdd] = useState(false);
  const [success, setSuccess] = useState(false);
  const [log, setLog] = useState(false);
  const { cart, setCart, cartLength, setCartLength } = useCart();

  useEffect(() => {
    if (isLogIn && userId) {
      console.log("Setting userId:", userId);
      setUserId(userId);
    }
  }, [isLogIn, userId, setUserId]);

  useEffect(() => {
    if (isLogIn && dataUserLog && dataUserLog.id) {
      console.log("Syncing cart from user data:", dataUserLog);

      let serverCart = [];

      if (dataUserLog.cart) {
        if (Array.isArray(dataUserLog.cart)) {
          if (dataUserLog.cart.length > 0 && Array.isArray(dataUserLog.cart[0])) {
            serverCart = dataUserLog.cart[0];
          } else {
            serverCart = dataUserLog.cart;
          }
        } else {
          serverCart = [];
        }
      }

      if (!Array.isArray(serverCart)) {
        console.warn("serverCart is not an array, setting to empty array:", serverCart);
        serverCart = [];
      }

      if (cart.length === 0 || JSON.stringify(cart) !== JSON.stringify(serverCart)) {
        setCart(serverCart);
        setCartLength(serverCart.reduce((total, item) => total + (item.quantity || 1), 0));
      }
    }
  }, [dataUserLog]);

  useEffect(() => {
    console.log("Auth status:", { isLogIn, userId, loading, dataUserLog });
    if (dataUserLog?.cart) {
      console.log("Cart structure:", {
        cartType: typeof dataUserLog.cart,
        isArray: Array.isArray(dataUserLog.cart),
        cartValue: dataUserLog.cart
      });
    }
  }, [isLogIn, userId, loading, dataUserLog]);

  const addToCart = async (idAdd) => {
    if (!isLogIn) {
      setLog(true);
      return;
    }

    if (loadActAdd) return;

    if (!dataUserLog || !dataUserLog.id) {
      console.error("User data not loaded yet, waiting...");

      const maxWaitTime = 3000;
      const checkInterval = 100;
      let waitTime = 0;

      while ((!dataUserLog || !dataUserLog.id) && waitTime < maxWaitTime) {
        await new Promise(resolve => setTimeout(resolve, checkInterval));
        waitTime += checkInterval;
      }

      if (!dataUserLog || !dataUserLog.id) {
        alert("Không thể tải thông tin người dùng. Vui lòng thử lại!");
        return;
      }
    }

    setLoadActAdd(true);

    try {
      const proSelect = await axios.get(
        `http://127.0.0.1:8080/api-menu/menu/${idAdd}`
      );

      if (proSelect.data && proSelect.data[0]) {
        const product = { ...proSelect.data[0], quantity: 1 };

        setCart(prevCart => {
          const currentCart = Array.isArray(prevCart) ? prevCart : [];
          const productIndex = currentCart.findIndex((item) => item.id === product.id);

          let updatedCart;
          if (productIndex >= 0) {
            updatedCart = currentCart.map((item, index) =>
              index === productIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            updatedCart = [...currentCart, product];
          }

          const newCartLength = updatedCart.reduce((total, item) => total + item.quantity, 0);
          setCartLength(newCartLength);

          const updateServer = async () => {
            try {
              const payload = {
                idUser: dataUserLog.id,
                codeUser: dataUserLog.codeUser,
                name: dataUserLog.nameUser,
                username: dataUserLog.username,
                pass: dataUserLog.pass,
                address: dataUserLog.address,
                phone: dataUserLog.phone,
                role: dataUserLog.roleUser,
                avt: dataUserLog.avtUser,
                cart: updatedCart,
              };

              console.log("Updating user with payload:", payload);

              if (!payload.idUser) {
                throw new Error("User ID is missing");
              }

              await axios.put(
                `http://127.0.0.1:8080/api-users/update-user/`,
                payload
              );

              console.log("Cart updated successfully on server");
            } catch (err) {
              console.error("Error updating cart on server:", err);
              console.error("User data:", dataUserLog);
              setCart(currentCart);
              setCartLength(currentCart.reduce((total, item) => total + item.quantity, 0));
              alert("Lỗi cập nhật giỏ hàng trên server!");
            }
          };

          updateServer();
          return updatedCart;
        });

        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Lỗi ngoài ý muốn!");
    } finally {
      setLoadActAdd(false);
    }
  };

  return {
    cart,
    loadActAdd,
    success,
    log,
    addToCart,
    setLog,
    cartLength,
  };
};

export default actionAddToCart;
