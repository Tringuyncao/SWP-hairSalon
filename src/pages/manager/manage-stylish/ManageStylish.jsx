import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input, message } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const ManageStylish = () => {
  const [stylists, setStylists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Lấy storeId từ localStorage
  const storeId = localStorage.getItem("storeId");
  const storeName = localStorage.getItem("storeName") || "N/A";
  const storeAddress = localStorage.getItem("storeAddress") || "N/A";

  useEffect(() => {
    if (storeId) {
      fetchStylists();
    } else {
      toast.error("Không tìm thấy storeId trong localStorage.");
    }
  }, [storeId]);

  // Hàm lấy danh sách stylists
  const fetchStylists = async () => {
    try {
      const response = await api.get(`/staff/${storeId}`);
      setStylists(response.data);
    } catch (error) {
      toast.error("Không thể lấy danh sách stylist.");
      console.error(error);
    }
  };

  // Hàm thêm stylist mới
  const handleAddStylist = async (values) => {
    setLoading(true);
    try {
      // Đặt mặc định role là "STAFF"
      const stylistData = {
        ...values,
        role: "STAFF",
      };

      await api.post(`manager/${storeId}`, stylistData);
      message.success("Đã thêm stylist thành công!");
      form.resetFields();
      setIsModalOpen(false);
      fetchStylists(); // Refresh danh sách sau khi thêm stylist
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
      dataIndex: "storeName",
      key: "storeName",
      render: () => storeName,
    },
    {
      title: "Store Address",
      dataIndex: "storeAddress",
      key: "storeAddress",
      render: () => storeAddress,
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Thêm Stylist
      </Button>
      <Table
        dataSource={stylists}
        columns={columns}
        rowKey="id"
        locale={{ emptyText: "Không có dữ liệu" }}
      />

      {/* Modal để thêm stylist */}
      <Modal
        title="Thêm Stylist"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddStylist} layout="vertical">
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
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
          >
            <Input placeholder="Nhập số điện thoại" />
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

export default ManageStylish;
