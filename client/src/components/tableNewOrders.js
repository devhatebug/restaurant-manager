import React, { useEffect, useState } from "react";
import { Button, Table, Flex, Modal, Image, message } from "antd";
import {
  getAllOrders,
  getOrderById,
  editOrder,
  deleteOrder,
} from "@/utils/crudOrders";
import { blobtoBase64 } from "@/utils/toBase64";
import formatPrice from "@/utils/formatPrice";

// Cập nhật hàm columns để nhận handlePrePare như một tham số
const columns = (showOrderDetails, handlePrePare, handleDeleteOrder) => [
  {
    title: "Tên sản phẩm",
    dataIndex: "nameProduct",
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
  {
    title: "Tên người nhận",
    dataIndex: "nameUser",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
  },
  {
    title: "Hành động",
    dataIndex: "action",
    render: (text, record) => (
      <div className="flex flex-wrap items-center">
        <Button onClick={() => showOrderDetails(record.id)} className="m-[5px]">
          More
        </Button>
        <Button
          onClick={() => handlePrePare(record.id)}
          className="m-[5px]"
          type="primary"
        >
          Prepare
        </Button>
        <Button
          onClick={() => handleDeleteOrder(record.id)}
          className="m-[5px]"
          danger
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const TableNewOrders = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [loadingModal, setLoadingModal] = useState(true);
  const [orderSelect, setOrderSelect] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const alertSuccessPre = () => {
    messageApi.success("Đã chuyển sang trạng thái chuẩn bị đơn hàng");
  };
  const alertErr = () => {
    messageApi.warning("Đã xảy ra lỗi!");
  };
  const alertSuccessDel = () => {
    messageApi.success("Xoá thành công!");
  };
  const fetchData = async () => {
    try {
      const data = await getAllOrders();
      const newOrders = data.filter((el) => el?.statusOrder === "new order");
      const formattedData = Array.isArray(newOrders)
        ? newOrders.map((dt, id) => ({
            key: id,
            nameProduct: dt?.nameOrder,
            price: `${formatPrice(dt?.price)}đ`,
            nameUser: dt?.nameClient,
            quantity: dt?.quantity,
            id: dt?.id,
          }))
        : [];
      setDataSource(formattedData);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const showOrderDetails = async (id) => {
    setOpen(true);
    setLoadingModal(true);
    try {
      const data = await getOrderById(id);
      setOrderSelect(data);
      setLoadingModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrePare = async (id) => {
    const data = await getAllOrders();
    const orderPre = data.find((el) => el.id === id);
    const dataUpdate = {
      nameOrder: orderPre?.nameOrder,
      price: orderPre?.price,
      status: "prepare",
      dispatch: orderPre?.dispatch,
      note: orderPre?.noteOrder,
      nameClient: orderPre?.nameClient,
      phoneClient: orderPre?.phoneClient,
      img: orderPre?.img,
      quantiy: orderPre?.quantity,
      idItem: orderPre?.id,
    };
    try {
      await editOrder(dataUpdate);
      fetchData();
      alertSuccessPre();
    } catch (err) {
      console.log(err);
      alertErr();
    }
  };
  const handleDeleteOrder = async (id) => {
    try {
      await deleteOrder(id);
      fetchData();
      alertSuccessDel();
    } catch (err) {
      console.log(err);
      alertErr();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      {contextHolder}
      <Modal
        title={<p>Thông tin chi tiết</p>}
        footer={
          <Button danger onClick={() => setOpen(false)}>
            Close
          </Button>
        }
        loading={loadingModal}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="mt-[40px]">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-lg"
              width={300}
              src={orderSelect ? blobtoBase64(orderSelect.img) : ""}
            />
          </div>
          <div className="mt-[20px] text-lg">
            <dl className="max-w-md text-gray-900 divide-y divide-gray-200">
              <div className="flex flex-wrap">
                <div className="flex flex-col pb-3 mr-[30px] mb-[10px]">
                  <dt className="mb-1 text-gray-500 md:text-lg">Sản phẩm</dt>
                  <dd className="text-lg font-semibold">
                    {orderSelect?.nameOrder}
                  </dd>
                </div>
                <div className="flex flex-col pb-3 mr-[30px] mb-[10px]">
                  <dt className="mb-1 text-gray-500 md:text-lg">Giá</dt>
                  <dd className="text-lg font-semibold">
                    {orderSelect ? formatPrice(orderSelect?.price) : "0"}đ
                  </dd>
                </div>
                <div className="flex flex-col pb-3">
                  <dt className="mb-1 text-gray-500 md:text-lg">Số lượng</dt>
                  <dd className="text-lg font-semibold">
                    {orderSelect?.quantity}
                  </dd>
                </div>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg">
                  Tên người nhận
                </dt>
                <dd className="text-lg font-semibold">
                  {orderSelect?.nameClient}
                </dd>
              </div>
              <div className="flex flex-wrap">
                <div className="flex flex-col pt-3 mr-[30px] mb-[10px]">
                  <dt className="mb-1 text-gray-500 md:text-lg">
                    Số điệ thoại
                  </dt>
                  <dd className="text-lg font-semibold">
                    {orderSelect?.phoneClient}
                  </dd>
                </div>
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-lg">Địa chỉ</dt>
                  <dd className="text-lg font-semibold">
                    {orderSelect?.dispatch}
                  </dd>
                </div>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg">Ghi chú</dt>
                <dd className="text-lg font-semibold">
                  {orderSelect?.noteOrder}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Modal>
      <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </Flex>
        <Table
          rowSelection={rowSelection}
          columns={columns(showOrderDetails, handlePrePare, handleDeleteOrder)}
          dataSource={dataSource}
        />
      </Flex>
    </>
  );
};

export default TableNewOrders;
