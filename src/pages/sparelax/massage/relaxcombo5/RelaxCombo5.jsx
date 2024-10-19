import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RelaxCombo5.scss';

const serviceSteps = [
    {
        title: 'Tẩy Trang & Rửa mặt sạch',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/1.png',
    },
    {
        title: 'Xông hơi & Sát Khuẩn trước',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/2.png',
    },
    {
        title: 'Lấy nhân mụn sạch',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/3.png',
    },
    {
        title: 'Phun hoa hồng',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/4.png',
    },
    {
        title: 'Xối mặt thác đá',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/5.png',
    },
    {
        title: 'Sát khuẩn sau',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/6.png',
    },
    {
        title: 'Sử dụng máy tia điện tím & Máy ánh sáng sinh học',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/7.png',
    },
    {
        title: 'Bôi tinh chất serum & di điện tinh lạnh khóa tinh chất',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/8.png',
    },
    {
        title: 'Gội đầu sạch gàu',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/9.png',
    },
    {
        title: 'Rửa tai bọt & Ngoáy tai',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/10.png',
    },
    {
        title: 'Sấy tóc',
        image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/11.png',
    },
];

const RelaxCombo5 = () => {
    return (
        <div className="relax-combo5">
            <div className="combo5-header">
                <h2>COMBO GỘI CHĂM SÓC DA & LẤY NHÂN MỤN CHUYÊN SÂU</h2>
            </div>

            <div className="combo5-main-image">
                <img src="https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo5/banner.png" alt="Combo Main" />
            </div>

            <div className="combo5-service-steps">
                <h3>QUY TRÌNH DỊCH VỤ</h3>
                <p>Dịch vụ được yêu thích nhất bao gồm Cắt - Gội - Massage thư giãn</p>

                <Row gutter={[16, 16]} className="service-steps-row">
                    {serviceSteps.map((step, index) => (
                        <Col key={index} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={<img alt={step.title} src={step.image} />}
                                className="service-step-card"
                            >
                                <Card.Meta title={step.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="combo5-booking">
                {/* Use Link to navigate to the booking page */}
                <Link to="/booking">
                    <Button type="primary" size="large" className="booking-button">
                        ĐẶT LỊCH NGAY
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default RelaxCombo5;
