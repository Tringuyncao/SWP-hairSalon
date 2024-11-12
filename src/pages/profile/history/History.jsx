import React, { useEffect, useState } from "react";
import { Table, message, Button, Modal, Rate, Input } from "antd";
import axios from "axios";

const History = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rate, setRate] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      message.error("Token không tồn tại, vui lòng đăng nhập lại.");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://103.90.227.48:8080/api/booking", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Lọc chỉ những lịch hẹn có status là "PAID"
        const paidAppointments = response.data.filter((appointment) => appointment.status === "PAID");
        console.log("Dữ liệu API trả về (PAID):", paidAppointments);
        setAppointments(paidAppointments);
        setLoading(false);
      } catch (error) {
        message.error("Lỗi khi tải dữ liệu lịch hẹn.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleFeedbackSubmit = async () => {
    if (!selectedAppointment) return;

    try {
      await axios.post(
        `http://103.90.227.48:8080/api/booking/feedback/${selectedAppointment.id}`,
        {
          rate,
          feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success("Phản hồi thành công!");

      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? { ...appointment, feedbackGiven: true }
          : appointment
      );
      setAppointments(updatedAppointments);

      setIsModalVisible(false);
      setRate(0);
      setFeedback("");
    } catch (error) {
      message.error("Lỗi khi gửi phản hồi.");
    }
  };

  const columns = [
    {
      title: "Tên Stylist",
      dataIndex: "orderDetails",
      key: "stylist",
      render: (orderDetails) => {
        const firstStylistName = orderDetails
          .map((detail) =>
            detail.stylistSlots && detail.stylistSlots.length > 0
              ? detail.stylistSlots[0].account.fullName
              : null
          )
          .find((name) => name); // Tìm tên stylist đầu tiên không phải null hoặc undefined

        return firstStylistName || "Không có tên stylist";
      },
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
      title: "Thời Gian",
      dataIndex: "orderDetails",
      key: "timeSlot",
      render: (orderDetails) => {
        const timeSlots = orderDetails
          .map((detail) =>
            detail.stylistSlots && detail.stylistSlots.length > 0
              ? detail.stylistSlots[0].slot.label
              : null
          )
          .filter((time) => time)
          .join(", ");
        return timeSlots || "Không có thời gian";
      },
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
      title: "Tổng Tiền",
      dataIndex: "total",
      key: "total",
      render: (total) => `${total.toLocaleString()} VND`,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => {
            setSelectedAppointment(record);
            setIsModalVisible(true);
          }}
          disabled={record.feedbackGiven}
        >
          {record.feedbackGiven ? "Đã Phản Hồi" : "Phản Hồi"}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Lịch Sử Đặt Lịch</h1>
      <Table
        columns={columns}
        dataSource={appointments}
        rowKey="id"
        loading={loading}
        pagination={false}
      />

      {/* Feedback Modal */}
      <Modal
        title="Phản Hồi Đơn Hàng"
        visible={isModalVisible}
        onOk={handleFeedbackSubmit}
        onCancel={() => setIsModalVisible(false)}
        okText="Gửi Phản Hồi"
        cancelText="Hủy"
      >
        <p>Đánh giá:</p>
        <Rate
          value={rate}
          onChange={(value) => setRate(value)}
        />
        <p>Phản hồi:</p>
        <Input.TextArea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default History;
