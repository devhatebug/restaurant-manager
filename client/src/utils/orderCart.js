import React from 'react';
import axios from "axios";

export const addOrderCart = async(pros, user) => {
    const data = {
        ...user,
        img: pros.imgItem,
        status: "new order",
        price: pros.price - (pros.price*pros.endow)/100,
        name: pros.nameItem,
        quantity: pros.quantity,
    }
    return await axios.post("http://127.0.0.1:8080/api-orders/add-order", data);
}

export const orderCart = async(pros, user) => {
    for(const pro of pros) {
        try {
            await addOrderCart(pro, user);
        } catch(err) {
            console.log(err)
        }
    }
}