import { useState, useEffect } from "react";
import axios from "axios";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";
import { useCart } from "@/context/cartContext";

const actionAddToCart = () => {
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [cart, setCart] = useState(dataUserLog?.cart || []);
  const [loadActAdd, setLoadActAdd] = useState(false);
  const [success, setSuccess] = useState(false);
  const [log, setLog] = useState(false);
  const { cartLength, setCartLength } = useCart();

  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
      setCart(dataUserLog?.cart || []);
    }
  }, [isLogIn, userId, setUserId, dataUserLog]);

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
    cart: cart,
  };

  const addToCart = async (idAdd) => {
    if (isLogIn) {
      setLoadActAdd(true);
      try {
        const proSelect = await axios.get(
          `http://127.0.0.1:8080/api-menu/menu/${idAdd}`
        );
        if (proSelect.data) {
          const updatedCart = [...cart, proSelect.data];
          const newAuth = { ...dataAuthor, cart: updatedCart };
          await axios.put(
            `http://127.0.0.1:8080/api-users/update-user/`,
            newAuth
          );
          setLoadActAdd(false);
          setCart(updatedCart);
          setCartLength(updatedCart?.length);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 1000);
        }
      } catch (err) {
        alert("Lỗi ngoài ý muốn!");
        console.log(err);
      }
    } else {
      setLog(true);
    }
  };

  return {
    cart,
    loadActAdd,
    success,
    log,
    addToCart,
    setLog,
  };
};

export default actionAddToCart;
