import React from "react";
import { Button, message } from "antd";
const AlertLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Vui lòng đăng nhập trước!");
  };
  return (
    <>
      {contextHolder}
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-[20px] focus:outline-none mx-[10px] my-[10px]"
        type="primary"
        onClick={info}
      >
        Đặt hàng
      </Button>
    </>
  );
};
export default AlertLogin;
