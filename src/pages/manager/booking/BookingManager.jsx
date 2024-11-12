import React, { useEffect, useState } from "react";
import { Table, Select } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";

const BookingManager = () => {
  const [bookings, setBookings] = useState([]);

  // Lấy id của store từ localStorage
  const storeId = localStorage.getItem("storeId");

  // Fetch the bookings list from the API
  const fetchBookings = async () => {
    try {
      const response = await api.get("booking/all");

      if (!storeId) {
        toast.error("Không tìm thấy ID store trong localStorage.");
        return;
      }

      const filteredBookings = response.data
        .filter((booking) => booking.store.id === parseInt(storeId))
        .map((booking) => {
          let stylistName = "N/A";
          let time = "N/A";

          // Duyệt qua tất cả các orderDetails để tìm stylistSlot hợp lệ
          booking.orderDetails.forEach((detail) => {
            if (detail.stylistSlots && detail.stylistSlots.length > 0) {
              const stylistSlot = detail.stylistSlots[0];
              stylistName = stylistSlot.account.fullName || "N/A";
              time = stylistSlot.slot.label || "N/A";
            }
          });

          return {
            id: booking.id,
            date: moment(booking.date).format("YYYY-MM-DD"),
            services: booking.orderDetails
              .map((detail) => detail.serviceOption.name)
              .join(", "),
            stylistName: stylistName,
            time: time,
            accountFullName: booking.account.fullName,
            accountPhone: booking.account.phone,
            storeName: booking.store.name,
            storeAddress: booking.store.address,
            status: booking.status,
            total: booking.total, // Add total amount here
          };
        });

      if (filteredBookings.length === 0) {
        toast.warn("Không có booking nào cho cửa hàng này.");
      }

      setBookings(filteredBookings);
    } catch (error) {
      toast.error("Failed to fetch bookings data");
      console.error(error);
    }
  };

  // Update the status of a booking
  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.patch(`booking/${id}?status=${newStatus}`);
      toast.success("Booking status updated successfully");
      fetchBookings(); // Refresh bookings after the status update
    } catch (error) {
      toast.error("Failed to update booking status");
    }
  };

  // Define the columns for the booking table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "Stylist Name",
      dataIndex: "stylistName",
      key: "stylistName",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Customer Name",
      dataIndex: "accountFullName",
      key: "accountFullName",
    },
    {
      title: "Customer Phone",
      dataIndex: "accountPhone",
      key: "accountPhone",
    },
    {
      title: "Store Name",
      dataIndex: "storeName",
      key: "storeName",
    },
    {
      title: "Address",
      dataIndex: "storeAddress",
      key: "storeAddress",
    },
    {
      title: "Tổng Tiền",
      dataIndex: "total",
      key: "total",
      render: (total) => (total ? `${total.toLocaleString()} VND` : "N/A"), // Format with commas and currency
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(newStatus) => handleStatusChange(record.id, newStatus)}
        >
          <Select.Option value="INIT">INIT</Select.Option>
          <Select.Option value="PAID">PAID</Select.Option>
          <Select.Option value="CANCEL">CANCEL</Select.Option>
        </Select>
      ),
    },
  ];

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <Table dataSource={bookings} columns={columns} rowKey="id" />
    </div>
  );
};

export default BookingManager;
