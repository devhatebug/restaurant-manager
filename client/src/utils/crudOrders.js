import axios from "axios";

export const getAllOrders = async () => {
  let data;
  const res = await axios.get("http://127.0.0.1:8080/api-orders/orders");
  data = res.data;
  return data;
};

export const getOrderById = async (id) => {
  let data;
  const res = await axios.get(`http://127.0.0.1:8080/api-orders/order/${id}`);
  data = res.data[0];
  return data;
};

export const editOrder = async (dataUpdate) => {
  await axios.put("http://127.0.0.1:8080/api-orders/update-order", dataUpdate);
};

export const deleteOrder = async (id) => {
  await axios.delete(`http://127.0.0.1:8080/api-orders/delete-order/${id}`);
};
