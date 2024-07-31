import React, { useState } from "react";
import { Button, Modal } from "antd";
import actionOrder from "@/utils/orderPro";
const FormOrder = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { FormContainer, isLogIn } = actionOrder();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
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
        <FormContainer />
      </Modal>
    </>
  );
};
export default FormOrder;
