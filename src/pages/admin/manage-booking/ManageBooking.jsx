import { Button, Form, Input, Modal, Popconfirm, Table, DatePicker, Select } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios"; // Adjust the path if necessary
import { toast } from "react-toastify";
import moment from "moment";

function ManageBooking() {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch the bookings list from the API
  const fetchBookings = async () => {
    try {
      const response = await api.get("booking");
      const modifiedBookings = response.data.map((booking) => ({
        id: booking.id,
        date: booking.date,
        services: booking.orderDetails.map((detail) => detail.serviceOption.name).join(", "),
        accountFullName: booking.account.fullName,
        accountPhone: booking.account.phone,
        storeName: booking.store.name,
        status: booking.status, // Store booking status
      }));
      setBookings(modifiedBookings);
    } catch (error) {
      toast.error("Failed to fetch bookings data");
    }
  };

  // Submit updated or new booking
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const postData = {
        storeId: values.storeId,
        orderDetailRequests: [
          {
            optionId: values.optionId,
            staffId: values.staffId,
          },
        ],
        slotId: values.slotId,
        date: values.date.format("YYYY-MM-DD"),
      };
      await api.post("booking", postData);
      toast.success("Booking saved successfully");
      fetchBookings();
      setShowModal(false);
      form.resetFields();
    } catch (error) {
      toast.error("Failed to save booking");
    } finally {
      setLoading(false);
    }
  };

  // Delete a booking
  const handleDelete = async (id) => {
    try {
      await api.delete(`booking/${id}`);
      toast.success("Booking deleted successfully");
      fetchBookings();
    } catch (error) {
      toast.error("Failed to delete booking");
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
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, booking) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setShowModal(true);
              setSelectedBooking(booking); // Set the selected booking for edit
              form.setFieldsValue({
                ...booking,
                date: moment(booking.date),
              });
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            onConfirm={() => handleDelete(id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add Booking</Button>
      <Table dataSource={bookings} columns={columns} rowKey="id" />
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            name="storeId"
            label="Store ID"
            rules={[{ required: true, message: "Please enter Store ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="slotId"
            label="Slot ID"
            rules={[{ required: true, message: "Please enter Slot ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="optionId"
            label="Option ID"
            rules={[{ required: true, message: "Please enter Option ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="staffId"
            label="Staff ID"
            rules={[{ required: true, message: "Please enter Staff ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ManageBooking;
