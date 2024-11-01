import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Calendar,
  DatePicker,
  Input,
  message,
  Select,
  TreeSelect,
} from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";
import { CarryOutOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const getListData = (value) => {
  let listData = []; // Specify the type of listData
  switch (value.date()) {
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const ManageSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stylish, setStylish] = useState([]);
  const [store, setStore] = useState([]);
  const [stylishId, setStylishId] = useState(0);
  // Hàm xử lý chọn ngày
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const fetchStylish = async (value) => {
    console.log("value ", value);
    try {
      const response = await api.get(`staff/${value}`);
      console.log(response.data);
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
      console.log(response.data);
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
  // Hàm đăng ký slot
  const handleRegisterSlot = async () => {
    if (!selectedDate) {
      toast.error("Vui lòng chọn ngày!");
      return;
    }

    setLoading(true);
    try {
      const formattedDate = selectedDate.format("YYYY-MM-DD");

      // Gửi yêu cầu POST với date dưới dạng query parameter
      const response = await api.post(`/slot/${stylishId}`, null, {
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
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
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
        onChange={(e) => setSelectedDate(e)}
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
      <Calendar cellRender={cellRender} />;
    </div>
  );
};

export default ManageSlot;
