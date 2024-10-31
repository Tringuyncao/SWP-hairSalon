import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./RelaxCombo2.scss";

const serviceSteps = [
    { title: "Khai huyệt mặt", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/1.png" },
    { title: "Massage huyệt đầu", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/2.png" },
    { title: "Rửa mặt & Massage mặt", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/3.png" },
    { title: "Hút mụn & Phun nước hoa hồng", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/4.png" },
    { title: "Tẩy da chết & đắp mặt nạ", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/5.png" },
    { title: "Massage cổ vai gáy", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/6.png" },
    { title: "Rửa tai & Massage tai", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/6.png" },
    { title: "Xối nước thác đổ", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/8.png" },
    { title: "Điện di tinh chất", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/9.png" },
    { title: "Kéo giãn cơ & đấm lưng", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/10.png" },
    { title: "Sấy tóc", image: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/11.png" },
];

const RelaxCombo2 = () => {
    return (
        <div className="combo-container">
            <div className="combo-header">
                <h2>COMBO GỘI MASSAGE CỔ VAI GÁY</h2>
                <img src="https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo2/banner.png" alt="Main Service" className="main-image" />
            </div>

            <div className="combo-steps">
                <h3>| QUY TRÌNH DỊCH VỤ |</h3>
                <p>Quy trình 11 bước Gội & Massage lưng, cổ vai gáy giãn cơ, thư giãn xua tan căng thẳng.</p>

                <Row gutter={[16, 16]}>
                    {serviceSteps.map((step, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                cover={<img alt={step.title} src={step.image} className="step-image" />}
                            >
                                <Card.Meta title={step.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="combo-footer">
                {/* Wrap the button with Link to navigate to /booking */}
                <Link to="/booking">
                    <Button type="primary" size="large" className="booking-button">
                        ĐẶT LỊCH NGAY
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default RelaxCombo2;
