import React, { useState } from 'react';
import CRUDTemplate from '../../../components/crud-template';
import { Form, Input } from 'antd';

function ManageStore() {

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
  ];
  const formItems =
    <>

      <Form.Item
        name="id"
        label="ID" hidden>
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input category's name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address"
        rules={[
          {
            required: true,
            message: "Please input store's address",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input store's phone",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>

  return (
    <div>
      <CRUDTemplate columns={columns} formItems={formItems} path="store" />
    </div>
  )
}

export default ManageStore