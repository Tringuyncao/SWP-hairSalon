import React, { useEffect, useState } from "react";
import { Table, message, Rate } from "antd";
import axios from "axios";

const Feedback = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      message.error("Token không tồn tại, vui lòng đăng nhập lại.");
      return;
    }

    let accountId;
    try {
      accountId = JSON.parse(atob(token.split('.')[1])).id;
      console.log("Account ID từ token:", accountId);
    } catch (e) {
      message.error("Token không hợp lệ, vui lòng đăng nhập lại.");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://103.90.227.48:8080/api/booking", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Lọc chỉ những lịch hẹn có status là "PAID" và có rate > 0 và feedback không null
        const filteredAppointments = response.data.filter(
          (appointment) => appointment.status === "PAID" && appointment.rate > 0 && appointment.feedback !== null
        );
        console.log("Dữ liệu API trả về:", filteredAppointments);
        setAppointments(filteredAppointments);
        setLoading(false);
      } catch (error) {
        message.error("Lỗi khi tải dữ liệu lịch hẹn.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const columns = [
    {
      title: "Tên Người Đặt Lịch",
      dataIndex: ["account", "fullName"],
      key: "stylist",
      render: (text, record) => (record.account ? record.account.fullName : "Không có tên"),
    },
    {
      title: "Tên Dịch Vụ",
      dataIndex: "orderDetails",
      key: "services",
      render: (orderDetails) =>
        orderDetails.length > 0
          ? orderDetails.map((detail) => detail.serviceOption.name).join(", ")
          : "Không có dịch vụ",
    },
    {
      title: "Ngày Đặt Lịch",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tên Cửa Hàng",
      dataIndex: ["store", "name"],
      key: "storeName",
      render: (text, record) => (record.store ? record.store.name : "Không có tên cửa hàng"),
    },
    {
      title: "Địa Chỉ Cửa Hàng",
      dataIndex: ["store", "address"],
      key: "storeAddress",
      render: (text, record) => (record.store ? record.store.address : "Không có địa chỉ"),
    },
    {
      title: "Đánh Giá",
      key: "rate",
      render: (text, record) => (
        <Rate disabled defaultValue={record.rate} />
      ),
    },
    {
      title: "Phản Hồi",
      dataIndex: "feedback",
      key: "feedback",
      render: (text) => text ? text : "Không có phản hồi",
    },
  ];

  return (
    <div>
      <h1>Lịch Sử Phản Hồi</h1>
      <Table
        columns={columns}
        dataSource={appointments}
        rowKey="id"
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default Feedback;
