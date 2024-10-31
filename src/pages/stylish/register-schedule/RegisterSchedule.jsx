import React, { useState } from "react";
import axios from "axios";
import { DatePicker, Button, message } from "antd";
import moment from "moment";
import api from "../../../config/axios";

const RegisterSchedule = () => {
  const [date, setDate] = useState(null);

  // Lấy staffId từ localStorage
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const staffId = storedUserInfo ? storedUserInfo.id : null;

  const handleRegister = async () => {
    if (!date) {
      message.error("Vui lòng chọn ngày làm việc!");
      return;
    }

    // Lấy ngày hôm nay và ngày đã chọn dưới dạng UTC
    const today = moment().startOf("day").utc();
    const selectedDate = moment(date).startOf("day").utc();
    console.log("Selected date:", selectedDate.format("YYYY-MM-DD"));
    console.log("Today's date:", today.format("YYYY-MM-DD"));

    // Kiểm tra nếu ngày đã chọn là ngày trong tương lai
    if (!selectedDate.isAfter(today)) {
      message.error("Chỉ có thể đăng ký lịch làm việc cho ngày trong tương lai.");
      return;
    }

    if (!staffId) {
      message.error("Không tìm thấy ID của stylist. Vui lòng đăng nhập lại.");
      return;
    }

    // Định dạng ngày với UTC để gửi tới API
    const formattedDate = selectedDate.format("YYYY-MM-DD");
    console.log("Date to be sent:", formattedDate);

    try {
      // Gửi request với `date` trong query
      const response = await api.post(`slot/${staffId}`, null, {
        params: { date: formattedDate },
      });

      if (response.status === 200) {
        message.success("Đăng ký lịch làm việc thành công!");
      } else {
        message.error("Đăng ký lịch làm việc thất bại!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        message.error(`Lỗi: ${error.response.data}`);
      } else {
        message.error("Có lỗi xảy ra. Vui lòng thử lại!");
      }
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đăng ký lịch làm việc</h2>
      <div style={{ marginBottom: "20px" }}>
        <DatePicker
          onChange={(value) => setDate(value.startOf("day"))} // Đảm bảo ngày được đặt về đầu ngày (00:00)
          format="YYYY-MM-DD"
          placeholder="Chọn ngày làm việc"
          disabledDate={(current) => current && current < moment().endOf("day")} // Chặn các ngày trong quá khứ
        />
      </div>
      <Button type="primary" onClick={handleRegister}>
        Đăng ký
      </Button>
    </div>
  );
};

export default RegisterSchedule;
