import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import './RelaxCombo6.scss';

const steps = [
    { title: 'Làm sạch dụng cụ', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/1.jpg' },
    { title: 'Đắp khăn nóng & Massage đầu', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/2.jpg' },
    { title: 'Cạo mặt & cạo râu', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/3.jpg' },
    { title: 'Lau mặt bằng khăn ướt', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/4.jpg' },
    { title: 'Phun nước hoa hồng', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/5.jpg' },
    { title: 'Thư giãn mặt lông công & âm thoa', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/6.jpg' },
    { title: 'Dò ráy tai', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/7.jpg' },
    { title: 'Lấy ráy tai nhẹ nhàng & sạch sẽ', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/8.jpg' },
    { title: 'Vệ sinh tai', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/9.jpg' },
    { title: 'Làm phết tai & massage tai', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/10.jpg' },
    { title: 'Lấy khăn ướt làm dịu tai', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/11.jpg' },
];

const features = [
    { title: 'Giường lấy ráy tai êm ái', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/diem_khac_biet_2.jpg' },
    { title: 'Kỹ thuật tay lấy chuyên nghiệp', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/diem_khac_biet_3.jpg' },
    { title: 'Đắp khăn nóng & Cạo mặt dễ chịu', img: 'https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/diem_khac_biet_1.jpg' },
];

const RelaxCombo6 = () => {
    return (
        <div className="relaxcombo-container">
            <h2 className="relaxcombo-title">LẤY RÁY TAI HOÀNG CUNG</h2>
            <div className="relaxcombo-header">
                <img
                    src="https://storage.30shine.com/web/v4/images/dich-vu-lay-ray-tai/chi-tiet-lay-ray-tai/banner.jpg"
                    alt="Lấy ráy tai Hoàng Cung"
                    className="relaxcombo-header-img"
                />
                <div className="relaxcombo-price">
                    <h3>Chỉ 70K</h3>
                </div>
            </div>

            <section className="service-steps">
                <h3 className="section-title">QUY TRÌNH DỊCH VỤ</h3>
                <Row gutter={[16, 16]} justify="center">
                    {steps.map((step, index) => (
                        <Col xs={12} sm={8} md={6} lg={4} key={index}>
                            <Card hoverable cover={<img alt={step.title} src={step.img} />}>
                                <Card.Meta title={step.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="service-features">
                <h3 className="section-title">ĐIỂM KHÁC BIỆT</h3>
                <Row gutter={[16, 16]} justify="center">
                    {features.map((feature, index) => (
                        <Col xs={12} sm={8} md={6} lg={4} key={index}>
                            <Card hoverable cover={<img alt={feature.title} src={feature.img} />}>
                                <Card.Meta title={feature.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <div className="book-button-container">
                <Button type="primary" size="large" className="book-button">
                    ĐẶT LỊCH NGAY
                </Button>
            </div>
        </div>
    );
};

export default RelaxCombo6;
