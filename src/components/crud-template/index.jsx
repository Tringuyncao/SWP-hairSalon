import { Button, Form, Input, message, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { render } from "react-dom";
import api from "../../config/axios";

function CRUDTemplate({ columns, formItems, path }) {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const tableColumn = [
    ...columns,
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, category) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setShowModal(true);
              form.setFieldsValue(category);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            description="Do you want to delete this category?"
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

  //Get
  const fetchData = async () => {
    try {
      const response = await api.get(path);
      setDatas(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //Create or update
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      //   if (values.id) {
      //     //update
      //     const response = await api.put(`${path}/${values.id}`, values);
      //   } else {
      //create
      const response = await api.post(path, values);
      //   }

      toast.success("Successfully saved");
      fetchData();
      form.resetFields();
      setShowModal(false);
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  //Delete
  const handleDelete = async (id) => {
    try {
      await api.delete(`${path}/${id}`);
      toast.success("Successfully deleted!");
      fetchData();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Button onClick={() => setShowModal(true)} style={{ color: "black" }}>
        Add
      </Button>

      <Table dataSource={datas} columns={tableColumn} />
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        onOk={() => form.submit()}
        confirmLoading={loading}
      >
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={handleSubmit}
        >
          {formItems}
        </Form>
      </Modal>
    </div>
  );
}
export default CRUDTemplate;
