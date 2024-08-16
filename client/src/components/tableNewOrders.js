import React, { useEffect, useState } from "react";
import { Button, Table, Flex, Modal, Image } from "antd";
import { getAllOrders, getOrderById } from "@/utils/crudOrders";
import { blobtoBase64 } from "@/utils/toBase64";
const columns = (showOrderDetails) => [
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
        <Button
          onClick={() => showOrderDetails(record.id)}
          className="m-[5px]"
        >
          More
        </Button>
        <Button className="m-[5px]" type="primary">
          Prepare
        </Button>
        <Button className="m-[5px]" danger>
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
  const showOrderDetails = async(id) => {
    setOpen(true);
    setLoadingModal(true);
    try {
      const data = await getOrderById(id);
      setOrderSelect(data);
      setLoadingModal(false);
    } catch(err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        const formattedData = Array.isArray(data)
          ? data.map((dt, id) => ({
              key: id,
              nameProduct: dt?.nameOrder,
              price: dt?.price,
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
      <Modal
        title={<p>Order Details</p>}
        footer={
          <Button danger onClick={() => setOpen(false)}>
            Close
          </Button>
        }
        loading={loadingModal}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div>
          <Image
            src={orderSelect ? blobtoBase64(orderSelect?.img) : ""}
          />
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
          columns={columns(showOrderDetails)}
          dataSource={dataSource}
        />
      </Flex>
    </>
  );
};

export default TableNewOrders;
