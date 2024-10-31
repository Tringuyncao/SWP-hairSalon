import React, { useState } from "react";
import { Button, DatePicker, message } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";

const RegisterSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  // Lấy staffId từ localStorage khi login
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const staffId = storedUserInfo ? storedUserInfo.id : null;

  // Hàm xử lý chọn ngày
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Hàm đăng ký lịch làm việc
  const handleRegisterSchedule = async () => {
    if (!staffId) {
      toast.error("Không tìm thấy ID của stylist. Vui lòng đăng nhập lại.");
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
        message.success("Đăng ký lịch làm việc thành công!");
      }
    } catch (error) {
      console.error(error);
      message.error("Đăng ký lịch làm việc thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Đăng ký lịch làm việc</h2>
      
      <DatePicker
        onChange={handleDateChange}
        value={selectedDate}
        format="YYYY-MM-DD"
        placeholder="Chọn ngày"
        disabledDate={(current) => current && current < moment().endOf("day")} // Chặn các ngày trong quá khứ
        style={{ marginBottom: 16 }}
      />
      
      <Button
        type="primary"
        onClick={handleRegisterSchedule}
        loading={loading}
        style={{ marginLeft: 8 }}
      >
        Đăng ký Lịch Làm Việc
      </Button>
    </div>
  );
};

export default RegisterSchedule;
