import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Calendar,
  DatePicker,
  message,
  Modal,
  Select,
} from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const ManageSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Ngày đổi
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái modal
  const [loading, setLoading] = useState(false);
  const [stylish, setStylish] = useState([]);
  const [store, setStore] = useState([]);
  const [stylishId, setStylishId] = useState(0);

  const fetchStylish = async (value) => {
    try {
      const response = await api.get(`staff/${value}`);
      setStylish(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const optionStylish = stylish.map((staff) => ({
    label: `${staff?.fullName}`,
    value: staff?.id,
  }));

  const fetchStore = async () => {
    try {
      const response = await api.get("store");
      setStore(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);

  const optionStore = store.map((storeItem) => ({
    label: `${storeItem?.name} - ${storeItem?.address}`,
    value: storeItem?.id,
  }));

  const handleRegisterSlot = async () => {
    if (!selectedDate) {
      toast.error("Vui lòng chọn ngày!");
      return;
    }

    setLoading(true);
    try {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      const response = await api.post(`/slot/${stylishId}`, null, {
        params: { date: formattedDate },
      });

      if (response.status === 200) {
        message.success("Đăng ký slot thành công!");
      }
    } catch (error) {
      message.error("Đăng ký slot thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h2>Đăng ký Slot</h2>
      <Select
        onChange={fetchStylish}
        style={{ width: "400px" }}
        options={optionStore}
      />
      <Select
        onChange={(e) => setStylishId(e)}
        style={{ width: "400px" }}
        options={optionStylish}
      />
      <DatePicker
        onChange={(date) => setSelectedDate(date)}
        value={selectedDate}
        format="YYYY-MM-DD"
        placeholder="Chọn ngày đổi"
        style={{ marginBottom: 16 }}
      />
      <Button
        type="primary"
        onClick={handleRegisterSlot}
        loading={loading}
        style={{ marginLeft: 8 }}
      >
        Đăng ký Slot
      </Button>
      <Button
        type="default"
        onClick={openModal}
        style={{ marginLeft: 8 }}
      >
        Sửa đổi ngày
      </Button>

      <Modal
        title="Sửa đổi ngày"
        visible={isModalVisible}
        onCancel={handleModalCancel}
      >
        <div>
          <h3>Ngày cần đổi</h3>
          <DatePicker
            format="YYYY-MM-DD"
            placeholder="Chọn ngày cần đổi"
            style={{ marginBottom: 16, width: "100%" }}
          />
        </div>
        <div>
          <h3>Ngày muốn đổi</h3>
          <DatePicker
            format="YYYY-MM-DD"
            placeholder="Chọn ngày muốn đổi"
            style={{ marginBottom: 16, width: "100%" }}
          />
        </div>
      </Modal>

      <Calendar />
    </div>
  );
};

export default ManageSlot;
