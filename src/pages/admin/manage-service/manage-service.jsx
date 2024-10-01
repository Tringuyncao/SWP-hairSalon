import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { render } from "react-dom";

function ManageService() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  //Get data
  const fetchData = async () => {
    try {
      const response = await api.get("service");
      setDatas(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //create or update
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      const response = await api.post("service", values);
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

  //delete
  const handleDelete = async (id) => {
    try {
      await api.delete(`service/${id}`);
      toast.success("Successfull deleted!");
      fetchData();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, service) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setShowModal(true);
              form.setFieldValue(service);
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

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Table dataSource={datas} />
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        title="Service"
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
          <Form.Item name="id">
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input service's name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ManageService;
