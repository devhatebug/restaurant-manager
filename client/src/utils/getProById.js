import {useState} from "react";
import axios from "axios";

const getProById = () => {
    const [data, setData] = useState();
    const URL_API = `http://127.0.0.1:8080/api-menu/menu`;
    const getProduct = async (id) => {
      try {
        const proSelect = await axios.get(`${URL_API}/${id}`);
        setData(proSelect.data);
      } catch (err) {
        console.log(err);
      }
    };

    return {
        getProduct, data
    }
}

export default getProById;