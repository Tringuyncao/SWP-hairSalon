import { Button, Form, Input, message, Modal, Popconfirm, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import { render } from "react-dom";

function ManageCategory() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  //Get
  const fetchData = async () => {
    try {
      const response = await api.get("category");
      setDatas(response.data);
      console.log(response.data)
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  //Create or update
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // if (values.id) {
      //   //update
      //   const response = await api.put(`category/${values.id}`, values);
      // } else {
      //   //create
      //   const response = await api.post("category", values);
      // }
      const response = await api.post("category", values);

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
      await api.delete(`category/${id}`);
      toast.success("Successfully deleted!");
      fetchData();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

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
      title: "Status",
      dataIndex: "deleted",
      key: "deleted",
      render: (e) => e ? <Tag color='red'>DELETED</Tag> : <Tag color='green'>RETAIN</Tag>
    },
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Table dataSource={datas} columns={columns} />
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
          <Form.Item name="id" hidden>
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
        </Form>
      </Modal>
    </div>
  );
}
export default ManageCategory;
