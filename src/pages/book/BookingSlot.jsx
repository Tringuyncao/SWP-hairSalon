import React, { useState, useEffect } from 'react';
import { Steps, Button, Form, DatePicker, TimePicker, message, Modal, List } from 'antd';
import { HomeOutlined, ScissorOutlined, CalendarOutlined } from '@ant-design/icons';
import axios from 'axios';
import './BookingSlot.scss';
import api from '../../config/axios';
import { useNavigate } from 'react-router-dom';

const { Step } = Steps;

const BookingSlot = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [isSalonModalVisible, setIsSalonModalVisible] = useState(false); // State quản lý modal cho salon
    const [isServiceModalVisible, setIsServiceModalVisible] = useState(false); // State quản lý modal cho service
    const [selectedSalon, setSelectedSalon] = useState(null); // Salon đã chọn
    const [selectedService, setSelectedService] = useState(null); // Service đã chọn
    const [salons, setSalons] = useState([]); // State để lưu danh sách salon từ API
    const [services, setServices] = useState([]); // State để lưu danh sách dịch vụ từ API
    const [loadingSalons, setLoadingSalons] = useState(false); // Loading khi gọi API salon
    const [loadingServices, setLoadingServices] = useState(false); // Loading khi gọi API dịch vụ
    const navigate =useNavigate;
    // Gọi API để lấy danh sách salon
    useEffect(() => {
        const fetchSalons = async () => {
            setLoadingSalons(true);
            try {
                const response = await api.get('store'); // Thay URL bằng API thực tế của bạn
                setSalons(response.data);
                setLoadingSalons(false);
            } catch (error) {
                message.error('Không thể tải danh sách salon!');
                setLoadingSalons(false);
            }
        };
        
        fetchSalons();
    }, []);

    // Gọi API để lấy danh sách dịch vụ
    useEffect(() => {
        const fetchServices = async () => {
            setLoadingServices(true);
            try {
                const response = await api.get('option'); // Thay URL bằng API thực tế của bạn
                setServices(response.data);
                setLoadingServices(false);
            } catch (error) {
                message.error('Không thể tải danh sách dịch vụ!');
                setLoadingServices(false);
            }
        };

        fetchServices();
    }, []);

    const next = () => setCurrentStep(currentStep + 1);
    const prev = () => setCurrentStep(currentStep - 1);

    // Hàm xử lý khi form hoàn thành và nộp dữ liệu lên API backend
    const handleFinish = async (values) => {
        try {
            // Gửi dữ liệu form cùng với salon và dịch vụ đã chọn
            const data = {
                ...values, // Lấy dữ liệu từ form (date, time)
                salon: selectedSalon, // Gắn thông tin salon đã chọn
                service: selectedService, // Gắn thông tin dịch vụ đã chọn
            };

            console.log('Sending data:', data);

            // Gửi dữ liệu lên API backend
            // await axios.post('https://api.example.com/booking', data); // Thay URL bằng API backend thực tế của bạn

            message.success('Lịch hẹn đã được đặt thành công!');
            navigate("/homepage")
        } catch (error) {
            message.error('Đặt lịch thất bại, vui lòng thử lại!');
        }
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
                    <Button icon={<HomeOutlined />} block style={{ marginBottom: '10px' }} onClick={() => setIsSalonModalVisible(true)}>
                        Xem tất cả salon
                    </Button>

                    {selectedSalon && <div>Đã chọn: {selectedSalon.name}</div>} {/* Hiển thị salon đã chọn */}
                </div>
            ),
        },
        {
            title: 'Chọn dịch vụ',
            content: (
                <div>
                    <Button icon={<ScissorOutlined />} block style={{ marginBottom: '10px' }} onClick={() => setIsServiceModalVisible(true)}>
                        Xem tất cả dịch vụ
                    </Button>

                    {selectedService && <div>Đã chọn: {selectedService.name}</div>} {/* Hiển thị dịch vụ đã chọn */}
                </div>
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

    const handleSalonSelect = (salon) => {
        setSelectedSalon(salon);
        setIsSalonModalVisible(false); // Đóng modal khi đã chọn
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setIsServiceModalVisible(false); // Đóng modal khi đã chọn
    };

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
                onFinish={handleFinish} // Gọi handleFinish khi form được submit thành công
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

            {/* Modal hiển thị danh sách salon */}
            <Modal title="Danh sách salon" visible={isSalonModalVisible} onCancel={() => setIsSalonModalVisible(false)} footer={null}>
                <List
                    bordered
                    loading={loadingSalons}
                    dataSource={salons}
                    renderItem={(item) => (
                        <List.Item onClick={() => handleSalonSelect(item)}>
                            {item.name} - {item.address}
                        </List.Item>
                    )}
                />
            </Modal>

            {/* Modal hiển thị danh sách dịch vụ */}
            <Modal title="Danh sách dịch vụ" visible={isServiceModalVisible} onCancel={() => setIsServiceModalVisible(false)} footer={null}>
                <List
                    bordered
                    loading={loadingServices}
                    dataSource={services}
                    renderItem={(item) => (
                        <List.Item onClick={() => handleServiceSelect(item)}>
                            {item.name} - {item.description} {/* Hiển thị tên dịch vụ và mô tả */}
                        </List.Item>
                    )}
                />
            </Modal>
        </div>
    );
};

export default BookingSlot;
