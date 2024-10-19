import React from 'react';
import { Card, Row, Col, Button, Tag } from 'antd';
import { Link } from 'react-router-dom';
import './MassageService.scss'; // Import CSS

const services = [
    {
        title: 'Gội Combo 2',
        description: 'Combo gội massage cổ vai gáy thư giãn giảm căng thẳng',
        duration: '25 Phút',
        images: [
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
        ],
        link: '/sparelax/massage/relaxcombo2', // Đường dẫn chính xác
    },
    {
        title: 'Gội Combo 3',
        description: 'Combo gội massage và chăm sóc da chuyên sâu',
        duration: '35 Phút',
        images: [
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-3-1.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-3-2.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-3-3.jpg',
        ],
        link: '/sparelax/massage/relaxcombo3', // Đường dẫn chính xác
    },
    {
        title: 'Gội Combo 4',
        description: 'Combo gội massage bấm huyệt đầu và giãn cơ lưng',
        duration: '45 Phút',
        images: [
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-4-1.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-4-2.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-4-3.jpg',
        ],
        link: '/sparelax/massage/relaxcombo4', // Đường dẫn chính xác
    },
    {
        title: 'Gội Combo 5',
        description: 'Combo gội massage và lấy nhân mụn chuẩn y khoa',
        duration: '45 Phút',
        images: [
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-1.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-2.jpg',
            'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-5-3.jpg',
        ],
        link: '/sparelax/massage/relaxcombo5', // Đường dẫn chính xác
    },
];

const MassageService = () => {
    return (
        <div className="service-container">
            <h2>Gội Massage Relax</h2>
            <p>Nơi đàn ông không chỉ cắt tóc mà còn tận hưởng gội đầu & massage đầy sảng khoái</p>

            <Row gutter={[16, 16]}>
                {services.map((service, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={6}>
                        <Card
                            hoverable
                            cover={
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                                    {service.images.map((img, idx) => (
                                        <img key={idx} src={img} alt={`Service ${idx}`} style={{ width: '30%', margin: '0 5px', borderRadius: '10px' }} />
                                    ))}
                                </div>
                            }
                            style={{ borderRadius: '15px' }}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Tag color="gold">{service.duration}</Tag>
                            <div style={{ marginTop: '10px' }}>
                                <Link to={service.link}>
                                    <Button type="link">Tìm hiểu thêm</Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MassageService;
