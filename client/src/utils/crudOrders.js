import axios from 'axios';

export const getAllOrders = async() => {
    let data;
    try {
        const res = await axios.get("http://127.0.0.1:8080/api-orders/orders");
        data = res.data;
    } catch(err) {
        console.log(err)
    }
    return data;
}

export const getOrderById = async(id) => {
    let data;
    try {
      const res = await axios.get(`http://127.0.0.1:8080/api-orders/order/${id}`);
      data = res.data[0];
    } catch (err) {
      console.log(err);
    }
    return data;
}

