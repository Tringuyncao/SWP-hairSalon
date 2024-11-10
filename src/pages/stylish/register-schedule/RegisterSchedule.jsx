import React, { useState, useEffect } from "react";
import { Button, DatePicker, message, Alert, Badge, Calendar } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";
import dayjs from "dayjs";

// Remove the type imports, because they're unnecessary in a JavaScript file
// import type { BadgeProps } from 'antd';
// import type { Dayjs, CalendarProps } from 'dayjs';

const RegisterSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableDates, setAvailableDates] = useState([]); // Lưu trữ lịch có sẵn

  // Lấy staffId từ localStorage khi login
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const staffId = storedUserInfo ? storedUserInfo.id : null;

  // Gọi API để lấy lịch làm việc khi component mount
  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await api.get("/slot/staff", {
          params: { month: 11, year: 2024 }
        });
        // Giả sử dữ liệu nhận được có dạng { staff: ["2024-11-05", "2024-11-06", ...] }
        setAvailableDates(response.data.staff.map(date => dayjs(date, "YYYY-MM-DD")));
      } catch (error) {
        console.error("Không thể tải lịch cắt tóc:", error);
        toast.error("Không thể tải lịch cắt tóc.");
      }
    };

    fetchAvailableDates();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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

  // Kiểm tra xem ngày có trong danh sách ngày có sẵn không
  const isAvailableDate = (date) => {
    return availableDates.some(availableDate => availableDate.isSame(date, "day"));
  };

  const getListData = (value) => {
    if (isAvailableDate(value)) {
      return [{ type: 'success', content: 'Ngày làm việc có sẵn' }];
    }
    return [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (

          <Badge key={item.content} status={item.type} text={item.content} />

        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Đăng ký lịch làm việc</h2>

      <DatePicker
        onChange={handleDateChange}
        value={selectedDate}
        format="YYYY-MM-DD"
        placeholder="Chọn ngày"
        disabledDate={(current) => !isAvailableDate(current) || current < moment().endOf("day")}
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

      <Alert
        message={`Bạn đã chọn ngày: ${selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Chưa chọn ngày'}`}
        style={{ marginBottom: 16 }}
      />

      <Calendar
        value={selectedDate ? dayjs(selectedDate) : dayjs()}
        onSelect={handleDateChange}
        dateCellRender={dateCellRender}
      />
    </div>
  );
};

export default RegisterSchedule;
