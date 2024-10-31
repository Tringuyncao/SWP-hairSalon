import React, { useState } from 'react';
import { Input, Card, Button, Row, Col } from 'antd';
import './ServiceSelection.scss';

const { Search } = Input;

// Danh sách dịch vụ giả định
const services = [
    {
        title: 'ShineCombo Phiên Bản 2',
        description: 'Combo cắt tóc và massage',
        price: '120K',
        duration: '30 phút',
    },
    {
        title: 'Cắt + Gội Combo 3',
        description: 'Dịch vụ cắt và gội tóc',
        price: '79K',
        duration: '60 phút',
    },
    {
        title: 'Cắt Combo 1',
        description: 'Dịch vụ cắt tóc tiêu chuẩn',
        price: '70K',
        duration: '30 phút',
    },
    {
        title: 'Gội + Massage',
        description: 'Dịch vụ gội đầu và massage',
        price: '100K',
        duration: '45 phút',
    },
    // Thêm nhiều dịch vụ khác tại đây
];

const ServiceSelection = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (value) => {
        setSearchText(value);
    };

    return (
        <div className="service-selection">
            <h2>Chọn dịch vụ của bạn</h2>
            <Search
                placeholder="Tìm kiếm dịch vụ"
                enterButton
                onSearch={handleSearch}
                style={{ marginBottom: '20px' }}
            />

            <Row gutter={16}>
                {services
                    .filter(service => service.title.toLowerCase().includes(searchText.toLowerCase()))
                    .map((service, index) => (
                        <Col span={8} key={index}>
                            <Card title={service.title} hoverable>
                                <p>{service.description}</p>
                                <p>Giá: {service.price}</p>
                                <p>Thời gian: {service.duration}</p>
                                <Button type="primary" block>
                                    Thêm dịch vụ
                                </Button>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default ServiceSelection;
