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

      // Update the selected appointment to indicate that feedback was given
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? { ...appointment, feedbackGiven: true } // Add a flag for feedback submission
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
      title: "Tên Người Đặt Lịch",
      dataIndex: ["account", "fullName"],
      key: "stylist",
      render: (text, record) => record.account ? record.account.fullName : "Không có tên",
    },
    {
      title: "Tên Dịch Vụ",
      dataIndex: "orderDetails",
      key: "services",
      render: (orderDetails) => orderDetails.length > 0 
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
      render: (text, record) => record.store ? record.store.name : "Không có tên cửa hàng",
    },
    {
      title: "Địa Chỉ Cửa Hàng",
      dataIndex: ["store", "address"],
      key: "storeAddress",
      render: (text, record) => record.store ? record.store.address : "Không có địa chỉ",
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
          disabled={record.feedbackGiven} // Disable the button if feedback was given
        >
          {record.feedbackGiven ? "Đã Phản Hồi" : "Phản Hồi"} {/* Change button label */}
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
