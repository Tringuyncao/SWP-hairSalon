import React, { useEffect, useState } from "react";
import { Table, message, Button, Popconfirm } from "antd";
import axios from "axios";

const Appointment = () => {
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

        // Lọc chỉ các lịch hẹn có status là INIT hoặc null
        const filteredAppointments = response.data.filter(
          (appointment) => appointment.status === "INIT" || appointment.status === null
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

  // Hàm xử lý cập nhật trạng thái thành CANCEL
  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `http://103.90.227.48:8080/api/booking/${id}?status=CANCEL`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Lịch hẹn đã được chuyển trạng thái thành CANCEL.");
      // Cập nhật lại danh sách lịch hẹn sau khi thay đổi
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      message.error("Lỗi khi cập nhật trạng thái lịch hẹn.");
    }
  };

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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Bạn có chắc chắn muốn hủy lịch hẹn này không?"
          onConfirm={() => handleCancel(record.id)}
          okText="Có"
          cancelText="Không"
        >
          <Button type="primary" danger>
            Hủy
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <h1>Lịch Hẹn của Tôi</h1>
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

export default Appointment;
