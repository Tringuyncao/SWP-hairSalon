import React, { useState } from 'react';
import { Carousel, Input, Button, Row, Col, Form, message, Card, Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.scss';

const { Meta } = Card;

const HomePage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]); // Thêm state để lưu trữ đánh giá

  const handleBooking = (values) => {
    message.success(`Lịch hẹn đã được đặt cho số: ${values.phoneNumber}`);
    setTimeout(() => {
      navigate('/book');
    }, 1000);
  };

  const handleFailed = () => {
    message.error('Vui lòng nhập số điện thoại hợp lệ!');
  };

  // Xử lý gửi đánh giá
  const handleReviewSubmit = (values) => {
    setReviews([...reviews, values]);
    message.success('Cảm ơn bạn đã gửi đánh giá!');
    form.resetFields(); // Reset form sau khi gửi
  };

  const bannerImages = [
    'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg',
    'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg',
    'https://as2.ftcdn.net/v2/jpg/06/91/46/55/1000_F_691465582_hXk34FT2ZB474bDKUCYNjJFzjT1YLAWT.jpg'
  ];

  const services = [
    {
      name: "Cắt tóc",
      price: "Giá từ 100.000đ",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-1.jpg",
      link: "/haircutservice"
    },
    {
      name: "Uốn tóc",
      price: "Giá từ 300.000đ",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-2.jpg",
      link: "/hairdyeservice"
    },
    {
      name: "Nhuộm tóc",
      price: "Giá từ 400.000đ",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-3.jpg",
      link: "/hairdyeservice"
    }
  ];

  // Thêm dịch vụ SPA & RELAX
  const spaServices = [
    {
      name: "Gội Massage Relax",
      price: "Giá từ 200.000đ",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_home_spa_1.png", // Thay đường dẫn hình ảnh
      link: "/sparelax/massage"
    },
    {
      name: "Lấy ráy tai êm",
      price: "Giá từ 150.000đ",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_home_spa_3.png", // Thay đường dẫn hình ảnh
      link: "/sparelax/earpick"
    }
  ];

  const highlights = [
    {
      title: "Chất lượng uy tín",
      description: "Chúng tôi cam kết mang lại cho bạn chất lượng dịch vụ hàng đầu từ những tay kéo chuyên nghiệp.",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_goi_co_vai_gay_banner.png"
    },
    {
      title: "Không gian và công nghệ",
      description: "Không gian thoáng đãng, hiện đại kết hợp với công nghệ cắt tóc tiên tiến.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      title: "Cam kết 30Shine Care",
      description: "Bảo hành dịch vụ đến khi bạn hài lòng với phong cách tóc của mình.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
    }
  ];

  return (
    <div className="homepage">
      {/* Banner Section */}
      <section className="banner-section">
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
      </section>

      {/* Booking Section */}
      <section className="booking-section">
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
      </section>

      {/* Services Section */}
      <section id="services-section" className="services-section">
        <div className="container">
          <h2>Dịch vụ nổi bật</h2>
          <Row gutter={[16, 16]} className="services-list">
            {services.map((service, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Link to={service.link}>
                  <div className="service-item">
                    <img src={service.image} alt={service.name} className="service-image" />
                    <h3>{service.name}</h3>
                    <p>{service.price}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Spa & Relax Section */}
      <section id="spa-relax-section" className="spa-relax-section">
        <div className="container">
          <h2>SPA & RELAX</h2>
          <Row gutter={[16, 16]} className="services-list">
            {spaServices.map((service, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Link to={service.link}>
                  <div className="service-item">
                    <img src={service.image} alt={service.name} className="service-image" />
                    <h3>{service.name}</h3>
                    <p>{service.price}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <h2>Tại sao chọn chúng tôi?</h2>
          <Row gutter={[16, 16]} className="highlights-list">
            {highlights.map((highlight, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  cover={<img alt={highlight.title} src={highlight.image} />}
                >
                  <Meta title={highlight.title} description={highlight.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section">
        <div className="container">
          <h2>Đánh giá chất lượng</h2>
          <Form onFinish={handleReviewSubmit} className="review-form">
            <Form.Item
              name="rating"
              label="Chọn số sao"
              rules={[{ required: true, message: 'Vui lòng chọn số sao!' }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item
              name="review"
              label="Nhận xét"
              rules={[{ required: true, message: 'Vui lòng nhập nhận xét!' }]}
            >
              <Input.TextArea placeholder="Viết nhận xét của bạn" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Gửi đánh giá
              </Button>
            </Form.Item>
          </Form>

          <div className="reviews-list">
            <h3>Nhận xét từ khách hàng:</h3>
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <Rate value={review.rating} disabled />
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
