import { useState, useEffect } from "react";
import fetchUser from "@/utils/fetchUser";
import getAuth from "@/utils/getAuthor";
import axios from "axios";
const actionOrder = () => {
  const { dataUserLog, setUserId } = fetchUser();
  const { isLogIn, userId } = getAuth();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (isLogIn) {
      setUserId(userId);
    }
  }, [isLogIn, setUserId, userId]);

  const handleOrderPro = async (dataOrder) => {
    setLoad(true)
    console.log(dataOrder.img)
    if (isLogIn) {
      try {
        await axios.post(
          "http://127.0.0.1:8080/api-orders/add-order",
          dataOrder
        );
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return {
    dataUserLog,
    handleOrderPro,
    load
  };
};

export default actionOrder;
