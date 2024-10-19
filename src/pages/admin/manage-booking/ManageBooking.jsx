import React, { useState } from "react";
import CRUDTemplate from "../../../components/crud-template";
import { Form, Input, DatePicker, Select } from "antd";

function ManageBooking() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Store ID",
      dataIndex: "storeId",
      key: "storeId",
    },
    {
      title: "Slot ID",
      dataIndex: "slotId",
      key: "slotId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Option ID",
      dataIndex: ["orderDetailRequests", "optionId"], // Assuming orderDetailRequests contains optionId
      key: "optionId",
    },
    {
      title: "Staff ID",
      dataIndex: ["orderDetailRequests", "staffId"], // Assuming orderDetailRequests contains staffId
      key: "staffId",
    },
  ];

  const formItems = (
    <>
      <Form.Item
        name="storeId"
        label="Store ID"
        rules={[
          {
            required: true,
            message: "Please input the Store ID",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="slotId"
        label="Slot ID"
        rules={[
          {
            required: true,
            message: "Please input the Slot ID",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
            message: "Please input the date",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name={["orderDetailRequests", 0, "optionId"]}
        label="Option ID"
        rules={[
          {
            required: true,
            message: "Please input the Option ID",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["orderDetailRequests", 0, "staffId"]}
        label="Staff ID"
        rules={[
          {
            required: true,
            message: "Please input the Staff ID",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );

  return (
    <div>
      <CRUDTemplate
        columns={columns}
        formItems={formItems}
        path="api/booking"
      />
    </div>
  );
}

export default ManageBooking;
