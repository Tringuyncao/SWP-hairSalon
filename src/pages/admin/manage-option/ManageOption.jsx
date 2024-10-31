import React from 'react';
import CRUDTemplate from '../../../components/crud-template';
import { Form, Input } from 'antd';

function ManageOption() {

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
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Price",  // New column for price
      dataIndex: "price",
      key: "price",
    }
  ];

  const formItems =
    <>
      <Form.Item name="id">
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input the option's name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="price"  // Form field for price
        label="Price"
        rules={[
          {
            required: true,
            message: "Please input the price",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
    </>;

  return (
    <div>
      <CRUDTemplate columns={columns} formItems={formItems} path="option" />
    </div>
  );
}

export default ManageOption;
