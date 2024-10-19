import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RelaxCombo3.scss';

const RelaxCombo3 = () => {
    const services = [
        { id: 1, title: 'Tẩy Trang & Rửa mặt sạch', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/1.png' },
        { id: 2, title: 'Hút mụn & Phun nước hoa hồng', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/2.png' },
        { id: 3, title: 'Massage mặt nâng cơ', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/3.png' },
        { id: 4, title: 'Đắp mặt nạ & chiếu sáng sinh học', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/4.png' },
        { id: 5, title: 'Tẩy da chết', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/5.png' },
        { id: 6, title: 'Điện di tinh chất & Bôi kem chống nắng', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/5.png' },
        { id: 7, title: 'Gội đầu sạch gàu', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/7.png' },
        { id: 8, title: 'Rửa tai bọt & Ngoáy tai', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/8.png' },
        { id: 9, title: 'Massage cổ vai gáy & tay', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/9.png' },
        { id: 10, title: 'Đấm lưng', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/9.png' },
        { id: 11, title: 'Sấy tóc', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/11.png' },
    ];

    return (
        <div className="combo3">
            <div className="combo3-header">
                <h2>COMBO CẮT GỘI CHĂM SÓC DA CHUYÊN SÂU</h2>
            </div>

            <Row gutter={[16, 16]} className="combo3-service-images">
                <Col span={24} className="main-image">
                    <img src="https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo3/banner.png" alt="Combo main" />
                </Col>
            </Row>

            <div className="combo3-service-info">
                <h3>QUY TRÌNH DỊCH VỤ</h3>
                <p>Quy trình Gội & Massage cổ vai gáy, kết hợp đắp mặt nạ mặt lạnh & tẩy da chết căng mịn.</p>
                <Row gutter={[16, 16]}>
                    {services.map(service => (
                        <Col key={service.id} xs={24} sm={12} md={8} lg={8} className="combo3-service-item">
                            <Card
                                hoverable
                                cover={<img alt={service.title} src={service.image} />}
                            >
                                <Card.Meta title={service.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="combo3-booking">
                {/* Wrap the button with Link to navigate to /booking */}
                <Link to="/booking">
                    <Button type="primary" size="large">ĐẶT LỊCH NGAY</Button>
                </Link>
            </div>
        </div>
    );
};

export default RelaxCombo3;
