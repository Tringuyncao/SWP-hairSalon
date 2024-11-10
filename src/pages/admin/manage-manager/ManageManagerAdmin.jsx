import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form, Input, message, Select } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const { Option } = Select;

const ManageManagerAdmin = () => {
  const [managers, setManagers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState("");
  const [stores, setStores] = useState([]); // state để lưu danh sách các store
  const [form] = Form.useForm();

  // Hàm lấy danh sách stores từ API
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await api.get("store");
        setStores(response.data); // Giả sử response.data là mảng các store
      } catch (error) {
        console.error("Không thể lấy danh sách store:", error);
      }
    };

    fetchStores();
  }, []);

  // Hàm lấy danh sách managers dựa trên storeId
  const fetchManagers = async () => {
    if (!storeId) {
      toast.error("Vui lòng chọn store.");
      return;
    }

    try {
      const response = await api.get(`manager/${storeId}`);
      const managersWithRole = response.data.filter(manager => manager.role === "MANAGER");
      setManagers(managersWithRole);
    } catch (error) {
      toast.error("Không thể lấy danh sách manager.");
      console.error(error);
    }
  };

  // Hàm thêm manager mới dựa trên storeId
  const handleAddManager = async (values) => {
    if (!storeId) {
      toast.error("Vui lòng chọn store.");
      return;
    }

    setLoading(true);
    try {
      const managerData = {
        ...values,
        role: "MANAGER",
        serviceIds: [],
      };

      await api.post(`manager/${storeId}`, managerData);
      message.success("Đã thêm manager thành công!");
      form.resetFields();
      setIsModalOpen(false);
      fetchManagers();
    } catch (error) {
      message.error("Thêm manager thất bại!");
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

  return (
    <div>
      {/* Select cho storeId */}
      <div style={{ marginBottom: 16 }}>
        <Select
          placeholder="Chọn cửa hàng"
          value={storeId}
          onChange={(value) => setStoreId(value)}
          style={{ width: 200, marginRight: 8 }}
        >
          {stores.map((store) => (
            <Option key={store.id} value={store.id}>
              {store.name}
            </Option>
          ))}
        </Select>
        <Button type="primary" onClick={fetchManagers}>
          Lấy danh sách Manager
        </Button>
      </div>

      {/* Bảng hiển thị danh sách manager */}
      <Table
        dataSource={managers}
        columns={columns}
        rowKey="id"
        locale={{ emptyText: "Không có dữ liệu" }}
      />

      {/* Nút để mở Modal thêm manager */}
      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={() => setIsModalOpen(true)}
        disabled={!storeId}
      >
        Thêm Manager
      </Button>

      {/* Modal để thêm manager */}
      <Modal
        title="Thêm Manager"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddManager} layout="vertical">
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
              Thêm Manager
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageManagerAdmin;
