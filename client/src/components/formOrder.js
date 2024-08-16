import React, { useEffect, useState } from "react";
import { Button, Modal, message } from "antd";
import actionOrder from "@/utils/orderPro";
import getProById from "@/utils/getProById";
const FormOrder = ({ idPro }) => {
  const [open, setOpen] = useState(false);
  const {getProduct, data} = getProById();
  const dataPro = data;
  const [dataNewOrder, setDataNewOrder] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { dataUserLog, handleOrderPro, load } = actionOrder();
  const [nameClient, setNameClient] = useState("");
  const [phoneClient, setPhoneClient] = useState("");
  const [dispatch, setDispatch] = useState("");
  const [note, setNote] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    getProduct(idPro)
  }, [idPro]);
  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      await handleOrderPro(dataNewOrder);
      if (!load) {
        setOpen(false);
        setConfirmLoading(false);
      }
      info();
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const info = () => {
    messageApi.info("Đặt hàng thành công!");
  };
  useEffect(() => {
    if (dataPro) {
      const newOrder = {
        name: dataPro[0]?.nameItem,
        img: dataPro[0]?.imgItem,
        price: dataPro[0]?.price - (dataPro[0]?.price * dataPro[0]?.endow) / 100,
        status: "new order",
        dispatch: dispatch ? dispatch : dataUserLog?.address,
        note: note ? note : "",
        nameClient: nameClient ? nameClient : dataUserLog?.nameUser,
        phoneClient: phoneClient ? phoneClient : dataUserLog?.phone,
        quantity: "1"
      };
      setDataNewOrder(newOrder);
    }
  }, [dataPro, dispatch, note, nameClient, phoneClient, dataUserLog]);
  return (
    <>
      {contextHolder}
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-[20px] focus:outline-none mx-[10px] my-[10px]"
        type="primary"
        onClick={showModal}
      >
        Đặt hàng
      </Button>
      <Modal
        title="Nhập thông tin"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="max-w-md mx-auto mt-[30px]">
          <div className="relative z-0 w-full mb-5 group">
            <div className="mb-6">
              <label
                htmlFor="nameClient"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tên người nhận
              </label>
              <input
                type="text"
                id="nameClient"
                value={nameClient}
                onChange={(e) => {
                  setNameClient(e.target.value);
                }}
                placeholder={dataUserLog?.nameUser || ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <div className="mb-6">
              <label
                htmlFor="phoneClient"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Số điện thoại người nhận
              </label>
              <input
                type="text"
                id="phoneClient"
                value={phoneClient}
                onChange={(e) => {
                  setPhoneClient(e.target.value);
                }}
                placeholder={dataUserLog?.phone || ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <div className="mb-6">
              <label
                htmlFor="dispatch"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Địa chỉ nhận hàng
              </label>
              <input
                type="text"
                id="dispatch"
                value={dispatch}
                onChange={(e) => {
                  setDispatch(e.target.value);
                }}
                placeholder={dataUserLog?.address || ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ghi chú
            </label>
            <textarea
              id="message"
              rows="4"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập ghi chú cho chúng tôi..."
            ></textarea>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default FormOrder;
