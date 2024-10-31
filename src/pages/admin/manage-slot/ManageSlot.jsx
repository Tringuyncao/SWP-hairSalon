import React, { useState } from "react";
import { Button, DatePicker, Input, message } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";

const ManageSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [staffId, setStaffId] = useState("");
  const [loading, setLoading] = useState(false);

  // Hàm xử lý chọn ngày
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Hàm xử lý nhập Staff ID
  const handleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };

  // Hàm đăng ký slot
  const handleRegisterSlot = async () => {
    if (!staffId) {
      toast.error("Vui lòng nhập Staff ID!");
      return;
    }

    if (!selectedDate) {
      toast.error("Vui lòng chọn ngày!");
      return;
    }

    setLoading(true);
    try {
      const formattedDate = selectedDate.format("YYYY-MM-DD");

      // Gửi yêu cầu POST với date dưới dạng query parameter
      const response = await api.post(`/slot/${staffId}`, null, {
        params: { date: formattedDate },
      });

      if (response.status === 200) {
        message.success("Đăng ký slot thành công!");
      }
    } catch (error) {
      console.error(error);
      message.error("Đăng ký slot thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Đăng ký Slot</h2>
      
      <Input
        placeholder="Nhập Staff ID"
        value={staffId}
        onChange={handleStaffIdChange}
        style={{ width: 200, marginBottom: 16 }}
      />
      
      <DatePicker
        onChange={handleDateChange}
        value={selectedDate}
        format="YYYY-MM-DD"
        placeholder="Chọn ngày"
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
    </div>
  );
};

export default ManageSlot;
