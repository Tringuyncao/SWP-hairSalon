import React from 'react';
import { Card, Row, Col, Button, Tag } from 'antd';
import { useNavigate, Link } from 'react-router-dom';  // Import useNavigate and Link
import './EarPick.scss'; // Import file scss

const EarPick = () => {
    const navigate = useNavigate();  // Initialize navigate function

    const handleNavigate = () => {
        navigate('/sparelax/earpick/relaxcombo6');  // Navigate to RelaxCombo6 when card is clicked
    };

    return (
        <div className="earpick-container">
            <h2 className="earpick-title">LẤY RÁY TAI</h2>
            <p className="earpick-description">
                Kỹ thuật lấy ráy tai nhẹ nhàng & thư thái trong không gian yên tĩnh, sạch sẽ.
            </p>

            <Row justify="center">
                <Col xs={24} sm={16} md={12} lg={8}>
                    <Card
                        hoverable
                        className="earpick-card"
                        onClick={handleNavigate} // Add click event to navigate
                        cover={
                            <div className="earpick-images">
                                <img
                                    src="https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-1.jpg"
                                    alt="Ear pick service 1"
                                    className="earpick-img"
                                />
                                <img
                                    src="https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-2.jpg"
                                    alt="Ear pick service 2"
                                    className="earpick-img"
                                />
                                <img
                                    src="https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-3.jpg"
                                    alt="Ear pick service 3"
                                    className="earpick-img"
                                />
                            </div>
                        }
                    >
                        <h3>Lấy ráy tai êm</h3>
                        <p>Kỹ thuật lấy ráy tai nhẹ nhàng & thư thái trong không gian yên tĩnh, sạch sẽ.</p>
                        <Tag color="gold">30 Phút</Tag>
                        <div className="earpick-price">
                            <span>70K</span>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Button to navigate to booking page */}
            <div className="navigate-button-container">
                <Link to="/booking"> {/* Use Link to navigate */}
                    <Button type="primary">
                        Đặt Lịch Ngay
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default EarPick;
