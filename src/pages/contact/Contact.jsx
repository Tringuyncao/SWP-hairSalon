import React from 'react';
import { Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import './Contact.scss'; // Import file CSS

const { Option } = Select;

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Thông tin nhận được từ form: ', values);
        // Handle form data (e.g., send email, save to database, etc.)
    };

    return (
        <div className="contact-container">
            <h1>Liên hệ với chúng tôi.</h1>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
            >
                <h2>Thông tin liên hệ</h2>

                <Form.Item label="Họ và tên" required>
                    <Input.Group compact>
                        <Form.Item
                            name="firstName"
                            noStyle
                            rules={[{ required: true, message: 'Vui lòng nhập họ!' }]}
                        >
                            <Input className="half-input" placeholder="Họ" />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            noStyle
                            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                        >
                            <Input className="half-input" placeholder="Tên" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item
                    label="Địa chỉ Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Vui lòng nhập địa chỉ email!' },
                        { type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ!' },
                    ]}
                >
                    <Input placeholder="Nhập địa chỉ email của bạn" />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                    <Input placeholder="Nhập số điện thoại của bạn" />
                </Form.Item>

                <h2>Chúng tôi có thể giúp gì cho bạn?</h2>

                <Form.Item
                    label="Loại yêu cầu"
                    name="inquiry"
                    rules={[{ required: true, message: 'Vui lòng chọn loại yêu cầu!' }]}
                >
                    <Select placeholder="Chọn một tùy chọn">
                        <Option value="general">Yêu cầu chung</Option>
                        <Option value="appointment">Đặt lịch hẹn</Option>
                        <Option value="service">Yêu cầu liên quan đến dịch vụ</Option>
                    </Select>
                </Form.Item>

                <h3>Nếu yêu cầu liên quan đến dịch vụ, vui lòng điền thông tin bên dưới</h3>

                <Form.Item label="Địa điểm dịch vụ" name="location">
                    <Select placeholder="Chọn một tùy chọn">
                        <Option value="location1">Địa điểm 1</Option>
                        <Option value="location2">Địa điểm 2</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày dịch vụ" name="dateOfService">
                    <DatePicker placeholder="Chọn ngày" format="DD/MM/YYYY" className="full-width-input" />
                </Form.Item>

                <Form.Item label="Thời gian dịch vụ" name="timeOfService">
                    <TimePicker format="HH:mm" className="full-width-input" />
                </Form.Item>

                <Form.Item label="Tên thợ cắt tóc" name="barber">
                    <Input placeholder="Nhập tên thợ cắt tóc" />
                </Form.Item>

                <Form.Item label="Ghi chú thêm" name="comments">
                    <Input.TextArea rows={4} placeholder="Có câu hỏi nào không?" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit-button">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Contact;
