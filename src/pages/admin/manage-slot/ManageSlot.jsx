import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, message, DatePicker, Button } from 'antd';
import api from '../../../config/axios'; // Import API client

const ManageSlot = () => {
  const [stores, setStores] = useState([]); // State for stores
  const [staffs, setStaffs] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null); // State for selected store
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Fetch stores and staff data on component mount
  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const response = await api.get('/store'); // Fetch all stores
      setStores(response.data); // Set stores data to state
    } catch (error) {
      message.error('Lỗi khi tải danh sách cửa hàng!');
    }
  };

  const fetchStaffs = async (storeId) => {
    try {
      const response = await api.get(`/staff/${storeId}`); // Fetch staff by storeId
      setStaffs(response.data); // Set staff data to state
    } catch (error) {
      message.error('Lỗi khi tải dữ liệu nhân viên!');
    }
  };

  const handleStoreChange = (storeId) => {
    setSelectedStore(storeId); // Set selected store
    fetchStaffs(storeId); // Fetch staff for the selected store
  };

  const handleRegisterSlot = async (values) => {
    try {
      setLoading(true);
      const staffId = values.staffId;
      const date = values.date.format('YYYY-MM-DD');
      await api.post(`slot/${staffId}`, { date });
      message.success('Đăng ký slot thành công!');
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('Lỗi khi đăng ký slot!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Đăng ký Slot cho Staff</h1>

      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Đăng ký slot cho Staff
      </Button>

      <Modal
        title="Đăng ký slot cho Staff"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
        confirmLoading={loading}
        okText="Đăng ký"
        cancelText="Hủy"
      >
        <Form form={form} onFinish={handleRegisterSlot}>
          {/* Select store */}
          <Form.Item
            name="storeId"
            label="Chọn cửa hàng"
            rules={[{ required: true, message: 'Vui lòng chọn cửa hàng!' }]}
          >
            <Select
              placeholder="Chọn cửa hàng"
              onChange={handleStoreChange} // Handle store change
            >
              {stores.map((store) => (
                <Select.Option key={store.id} value={store.id}>
                  {store.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Select staff based on store */}
          <Form.Item
            name="staffId"
            label="Chọn nhân viên"
            rules={[{ required: true, message: 'Vui lòng chọn nhân viên!' }]}
          >
            <Select placeholder="Chọn nhân viên" disabled={!selectedStore}>
              {staffs.map((staff) => (
                <Select.Option key={staff.id} value={staff.id}>
                  {staff.fullName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Chọn ngày"
            rules={[{ required: true, message: 'Vui lòng chọn ngày!' }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageSlot;
