import React, { useEffect, useState } from "react";
import { Badge, Calendar } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";

const ManageSchedule = () => {
  const [scheduleData, setScheduleData] = useState({});
  const [currentMonth, setCurrentMonth] = useState(moment().month() + 1);
  const [currentYear, setCurrentYear] = useState(moment().year());

  // Lấy lịch làm việc từ API khi component được mount hoặc khi thay đổi tháng/năm
  useEffect(() => {
    fetchSchedule(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  // Lấy lịch làm việc dựa trên tháng và năm
  const fetchSchedule = async (month, year) => {
    try {
      const response = await api.get(`slot/manager`, {
        params: { month, year },
      });
      if (response.status === 200) {
        setScheduleData(response.data);
      } else {
        toast.error("Không thể lấy lịch làm việc!");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API lịch làm việc:", error);
      toast.error("Không thể lấy lịch làm việc!");
    }
  };

  // Hiển thị dữ liệu lịch trên Calendar
  const dateCellRender = (value) => {
    const dateString = value.format("YYYY-MM-DD");
    const daySchedule = scheduleData[dateString] || [];

    return (
      <ul className="events">
        {daySchedule.map((item) => (
            <Badge key={item.id} status="success" text={item.fullName} />
        ))}
      </ul>
    );
  };

  // Xử lý khi thay đổi tháng/năm trong Calendar
  const handlePanelChange = (value) => {
    const newMonth = value.month() + 1;
    const newYear = value.year();
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);

    // Gọi lại API để cập nhật lịch theo tháng/năm mới
    fetchSchedule(newMonth, newYear);
  };

  return (
    <div>
      <h2>Quản lý lịch làm việc</h2>

      <Calendar 
        dateCellRender={dateCellRender} 
        onPanelChange={handlePanelChange} 
      />
    </div>
  );
};

export default ManageSchedule;
