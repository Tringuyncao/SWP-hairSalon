import React from 'react';
import { Form, Input, Button, message } from 'antd';
import './BookingForm.scss';

const BookingForm = () => {
  const [form] = Form.useForm();

  const handleBooking = (values) => {
    message.success(`Lịch hẹn đã được đặt cho số: ${values.phoneNumber}`);
  };

  return (
    <div className="booking-container">
      <h2>ĐẶT LỊCH GIỮ CHỖ CHỈ 30 GIÂY</h2>
      <p>Cắt xong trả tiền, hủy lịch không sao</p>

      <Form
        form={form}
        onFinish={handleBooking}
        layout="inline"
        className="booking-form"
      >
        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại!' },
            { pattern: /^\d{10}$/, message: 'Số điện thoại phải là 10 chữ số!' }
          ]}
        >
          <Input placeholder="Nhập SĐT để đặt lịch" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            ĐẶT LỊCH NGAY
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
