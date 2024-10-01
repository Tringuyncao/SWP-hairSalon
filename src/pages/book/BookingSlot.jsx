import React, { useState } from 'react';
import { Steps, Button, Form, Select, DatePicker, TimePicker, message } from 'antd';
import { HomeOutlined, ScissorOutlined, CalendarOutlined } from '@ant-design/icons';
import './BookingSlot.scss';

const { Step } = Steps;
const { Option } = Select;

const BookingSlot = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();

    const next = () => setCurrentStep(currentStep + 1);
    const prev = () => setCurrentStep(currentStep - 1);

    const handleFinish = (values) => {
        console.log('Success:', values);
        message.success('Lịch hẹn đã được đặt!');
    };

    const handleFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Vui lòng hoàn thành các bước đặt lịch!');
    };

    const steps = [
        {
            title: 'Chọn salon',
            content: (
                <div>
                    <Button icon={<HomeOutlined />} block style={{ marginBottom: '10px' }}>
                        Xem tất cả salon
                    </Button>
                    <Button block icon={<img src="https://maps.gstatic.com/tactile/geoprofile/sharing/icon-2x.png" alt="location" style={{ width: '20px', marginRight: '10px' }} />}>
                        Tìm salon gần bạn
                    </Button>
                </div>
            ),
        },
        {
            title: 'Chọn dịch vụ',
            content: (
                <Form.Item
                    name="service"
                    rules={[{ required: true, message: 'Vui lòng chọn dịch vụ!' }]}
                >
                    <Select placeholder="Chọn dịch vụ của bạn" className="custom-select">
                        <Option value="cutting">Cắt tóc</Option>
                        <Option value="dyeing">Nhuộm tóc</Option>
                        <Option value="styling">Tạo kiểu</Option>
                    </Select>
                </Form.Item>
            ),
        },
        {
            title: 'Chọn ngày, giờ & stylist',
            content: (
                <div>
                    <Form.Item name="date" rules={[{ required: true, message: 'Vui lòng chọn ngày!' }]}>
                        <DatePicker placeholder="Chọn ngày" className="custom-datepicker" />
                    </Form.Item>
                    <Form.Item name="time" rules={[{ required: true, message: 'Vui lòng chọn giờ!' }]}>
                        <TimePicker placeholder="Chọn giờ" className="custom-timepicker" format="HH:mm" />
                    </Form.Item>
                </div>
            ),
        },
    ];

    return (
        <div className="booking-page">
            <h2>Đặt lịch giữ chỗ</h2>
            <Steps current={currentStep} direction="vertical" className="steps-container">
                {steps.map((item, index) => (
                    <Step key={index} title={item.title} icon={index === 0 ? <HomeOutlined /> : index === 1 ? <ScissorOutlined /> : <CalendarOutlined />} />
                ))}
            </Steps>

            <Form
                form={form}
                name="booking"
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                layout="vertical"
                className="booking-form"
            >
                <div className="step-content">{steps[currentStep].content}</div>

                <div className="steps-action">
                    {currentStep < steps.length - 1 && (
                        <Button type="primary" onClick={next} block>
                            Tiếp theo
                        </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block style={{ marginBottom: '10px' }}>
                                Chốt giờ cắt
                            </Button>
                        </Form.Item>
                    )}
                    {currentStep > 0 && (
                        <Button type="default" onClick={prev} block>
                            Quay lại
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default BookingSlot;
