import React from "react";
import { Button, Row, Col, Card } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./RelaxCombo4.scss"; // Import the CSS file

const serviceData = [
    { title: "Massage vùng lưng", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/1.png" },
    { title: "Massage nửa lưng dưới thắt lưng", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/2.png" },
    { title: "Massage đá nóng lưng", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/3.png" },
    { title: "Quấn đá nóng lưng", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/4.png" },
    { title: "Massage một huyệt mặt", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/5.png" },
    { title: "Rửa mặt", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/5.png" },
    { title: "Massage mặt", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/7.png" },
    { title: "Hút mụn", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/8.png" },
    { title: "Phun hoa hồng", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/8.png" },
    { title: "Gội đầu", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/8.png" },
    { title: "Massage đầu", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/11.png" },
    { title: "Rửa tai & Ngày tai", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/11.png" },
    { title: "Xông nút thạch đốt", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/13.png" },
    { title: "Massage tay", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/14.png" },
    { title: "Sấy tóc", img: "https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/15.png" },
];

const RelaxCombo4 = () => {
    return (
        <div className="combo4-container">
            <div className="header">
                <h2>COMBO GÓI MASSAGE ĐÁ NÓNG HIMALAYA</h2>
                <img src="https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/banner.png" alt="Massage Banner" className="header-image" />
            </div>

            <div className="service-section">
                <h3>QUY TRÌNH DỊCH VỤ</h3>
                <Row gutter={[16, 16]}>
                    {serviceData.map((service, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={service.title} src={service.img} />}
                            >
                                <Card.Meta title={service.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="button-section">
                {/* Wrap the button with Link to navigate to /booking */}
                <Link to="/booking">
                    <Button type="primary" size="large">ĐẶT LỊCH NGAY</Button>
                </Link>
            </div>
        </div>
    );
};

export default RelaxCombo4;
