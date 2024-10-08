import React, { useState } from 'react';
import CRUDTemplate from '../../../components/crud-template';
import { Form, Input } from 'antd';

function ManageService() {
    
  const columns = [
    {
      title:"ID",
      dataIndex:"id",
      key:"id"
    },
    {
      title:"Name",
      dataIndex:"name",
      key:"name"
    },
    {
      title:"Description",
      dataIndex:"description",
      key:"description"
    },
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
                message: "Please input category's name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
  </>

  return (
    <div> 
      <CRUDTemplate columns={columns} formItems={formItems} path="service" />
    </div>
  )
}

export default ManageService