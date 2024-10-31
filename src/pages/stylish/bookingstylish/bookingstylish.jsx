import React, { useEffect, useState } from "react";
import { Button, Table, Select } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";

const BookingStylish = () => {
  const [bookings, setBookings] = useState([]);

  // Lấy id của stylist từ localStorage
  const stylistId = JSON.parse(localStorage.getItem("userInfo"))?.id;

  // Fetch the bookings list from the API
  const fetchBookings = async () => {
    try {
      const response = await api.get("booking/all");

      if (!stylistId) {
        toast.error("Không tìm thấy ID stylist trong localStorage.");
        return;
      }

      const filteredBookings = response.data
        .filter((booking) =>
          booking.orderDetails.some((detail) =>
            detail.stylistSlots.some((slot) => slot.account.id === stylistId)
          )
        )
        .map((booking) => {
          // Tìm stylistSlots không trống trong orderDetails
          const stylistSlot = booking.orderDetails.find(
            (detail) => detail.stylistSlots && detail.stylistSlots.length > 0
          )?.stylistSlots[0];

          return {
            id: booking.id,
            date: booking.date,
            services: booking.orderDetails
              .map((detail) => detail.serviceOption.name)
              .join(", "),
            stylistName: stylistSlot ? stylistSlot.account.fullName : "N/A",
            time: stylistSlot ? stylistSlot.slot.label : "N/A",
            accountFullName: booking.account.fullName,
            accountPhone: booking.account.phone,
            storeName: booking.store.name,
            storeAddress: booking.store.address,
            status: booking.status,
          };
        });

      if (filteredBookings.length === 0) {
        toast.warn("Không có booking nào cho stylist này.");
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

export default BookingStylish;
