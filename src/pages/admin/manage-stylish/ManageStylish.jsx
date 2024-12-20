import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input, message, Select } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const ManageStylishAdmin = () => {
  const [stylists, setStylists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState("");
  const [form] = Form.useForm();
  const [store, setStore] = useState([]);
  const [service, setService] = useState([]);

  // Hàm lấy danh sách stylists dựa trên storeId
  const fetchStylists = async (value) => {
    // if (!storeId) {
    //   toast.error("Vui lòng nhập storeId.");
    //   return;
    // }
    if (value) {
      setStoreId(value);
    }
    try {
      const response = await api.get(`staff/${value}`);
      // Lọc chỉ lấy stylist có role là "STAFF"
      const staffOnly = response.data.filter(
        (stylist) => stylist.role === "STAFF"
      );
      setStylists(staffOnly);
    } catch (error) {
      toast.error("Không thể lấy danh sách stylist.");
      console.error(error);
    }
  };
  const fetchStore = async () => {
    try {
      const response = await api.get("store");
      console.log(response.data);
      setStore(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  console.log(store);
  useEffect(() => {
    fetchStore();
    fetchService();
  }, []);
  const optionStore = store.map((storeItem) => ({
    label: `${storeItem?.name} - ${storeItem?.address}`,
    value: storeItem?.id,
  }));
  const fetchService = async () => {
    try {
      const response = await api.get("service");
      console.log(response.data);
      setService(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const optionService = service.map((ServiceItem) => ({
    label: `${ServiceItem?.name}`,
    value: ServiceItem?.id,
  }));

  // Hàm thêm stylist mới dựa trên storeId
  const handleAddStylist = async (values) => {
    if (!storeId) {
      toast.error("Vui lòng nhập storeId.");
      return;
    }

    setLoading(true);
    try {
      // Đặt mặc định role là "STAFF" và serviceIds là mảng rỗng
      const stylistData = {
        ...values,
        role: "STAFF", // Mặc định role là "STAFF"
      };

      await api.post(`staff/${storeId}`, stylistData);
      message.success("Đã thêm stylist thành công!");
      form.resetFields();
      setIsModalOpen(false);
      fetchStylists(storeId); // Refresh danh sách sau khi thêm stylist
    } catch (error) {
      message.error("Thêm stylist thất bại!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Store Name",
      dataIndex: ["store", "name"],
      key: "storeName",
    },
    {
      title: "Store Address",
      dataIndex: ["store", "address"],
      key: "storeAddress",
    },
  ];
  console.log(optionStore);
  return (
    <div>
      {/* Input cho storeId */}
      <div style={{ marginBottom: 16 }}>
        <Select
          onChange={fetchStylists}
          style={{ width: "400px" }}
          options={optionStore}
        />
      </div>

      {/* Bảng hiển thị danh sách stylist */}
      <Table
        dataSource={stylists}
        columns={columns}
        rowKey="id"
        locale={{ emptyText: "Không có dữ liệu" }}
      />

      {/* Nút để mở Modal thêm stylist */}
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() => setIsModalOpen(true)}
        disabled={!storeId}
      >
        Thêm Stylist
      </Button>

      {/* Modal để thêm stylist */}
      <Modal
        title="Thêm Stylist"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleAddStylist}
          layout="vertical"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            label="Service"
            name="serviceIds"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Select
              style={{ width: "300px" }}
              options={optionService}
              mode="multiple"
              maxTagCount={2}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Thêm Stylist
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageStylishAdmin;
