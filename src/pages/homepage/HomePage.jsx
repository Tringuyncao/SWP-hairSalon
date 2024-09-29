import React from 'react';
import { Carousel, Input, Button, Row, Col, Form, message } from 'antd';
import './HomePage.scss';

const HomePage = () => {
    const [form] = Form.useForm();

    const handleBooking = (values) => {
        message.success(`Lịch hẹn đã được đặt cho số: ${values.phoneNumber}`);
    };

    const handleFailed = () => {
        message.error('Vui lòng nhập số điện thoại hợp lệ!');
    };

    const bannerImages = [
        'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg',
        'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg',
        'https://as2.ftcdn.net/v2/jpg/06/91/46/55/1000_F_691465582_hXk34FT2ZB474bDKUCYNjJFzjT1YLAWT.jpg'
    ];

    const services = [
        { name: "Cắt tóc", price: "Giá từ 100.000đ", image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-1.jpg" },
        { name: "Uốn tóc", price: "Giá từ 300.000đ", image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-2.jpg" },
        { name: "Nhuộm tóc", price: "Giá từ 400.000đ", image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-3.jpg" }
    ];

    const qualityPartners = [
        {
            name: "Dr.FORHAIR",
            description: "Top 1 dầu gội ngăn rụng tóc được tin dùng bởi hàng ngàn khách hàng.",
            image: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/7.jpeg"
        },
        {
            name: "Blairsom",
            description: "Phát triển bởi các chuyên gia hàng đầu về tóc, cung cấp dưỡng chất tuyệt vời.",
            image: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/9.jpeg"
        },
        {
            name: "LoveWarmth",
            description: "Thương hiệu xuất sắc về chăm sóc tóc nam giới.",
            image: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/8.jpeg"
        },
        {
            name: "ATS for man",
            description: "Thương hiệu mỹ phẩm dành cho nam giới, chuyên biệt cho tóc và da đầu.",
            image: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/6.jpeg"
        }
    ];

    return (
        <div className="homepage">
            {/* Banner Section */}
            <Carousel autoplay className="banner-carousel">
                {bannerImages.map((image, index) => (
                    <div key={index} className="banner-wrapper">
                        <img src={image} alt={`banner-${index}`} className="banner-image" />
                        <div className="banner-text">
                            <h2>Chào mừng đến với Barber Shop</h2>
                            <p>Trải nghiệm dịch vụ tốt nhất cho bạn</p>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Booking Section */}
            <div className="booking-section">
                <div className="booking-background">
                    <div className="booking-content">
                        <h2>Đặt lịch giữ chỗ chỉ 30 giây</h2>
                        <p>Cắt xong trả tiền, hủy lịch không sao</p>
                        <Form
                            form={form}
                            onFinish={handleBooking}
                            onFinishFailed={handleFailed}
                            className="booking-form"
                        >
                            <Form.Item
                                name="phoneNumber"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập số điện thoại!' },
                                    { pattern: /^\d{10}$/, message: 'Số điện thoại phải là 10 chữ số!' }
                                ]}
                            >
                                <Input
                                    placeholder="Nhập SĐT để đặt lịch"
                                    className="booking-input"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="booking-button">
                                    ĐẶT LỊCH NGAY
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <h2>Dịch vụ nổi bật</h2>
                <Row gutter={[16, 16]} className="services-list">
                    {services.map((service, index) => (
                        <Col xs={24} sm={12} md={6} key={index}>
                            <div className="service-item">
                                <img src={service.image} alt={service.name} className="service-image" />
                                <h3>{service.name}</h3>
                                <p>{service.price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Quality & Reputation Section */}
            <div className="quality-section">
                <h2>CHẤT LƯỢNG & UY TÍN</h2>
                <Row gutter={[16, 16]} justify="center" className="partners-grid">
                    {qualityPartners.map((partner, index) => (
                        <Col xs={24} sm={12} md={6} key={index}>
                            <div className="partner-item">
                                <img src={partner.image} alt={partner.name} className="partner-logo" />
                                <h3>{partner.name}</h3>
                                <p>{partner.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Space & Technology Section */}
            <div className="space-tech-section">
                <h2>KHÔNG GIAN & CÔNG NGHỆ</h2>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8}>
                        <img src="https://storage.30shine.com/web/v4/images/pc/pc_kgcn_banner.png" alt="Không gian thoáng, mát, sạch" className="tech-image" />
                        <p>Không gian thoáng, mát, sạch</p>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <img src="https://storage.30shine.com/web/v4/images/pc/pc_kgcc_2.png" alt="Trang thiết bị hiện đại" className="tech-image" />
                        <p>Trang thiết bị hiện đại</p>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <img src="https://storage.30shine.com/web/v4/images/pc/pc_kgcc_1.jpg" alt="Không gian sạch, thoáng, mát" className="tech-image" />
                        <p>Không gian sạch, thoáng, mát</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomePage;
