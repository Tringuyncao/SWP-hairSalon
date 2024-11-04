//import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Input, Button, Row, Col, Form, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.scss';
//import api from '../../config/axios';
import React, { useRef } from 'react';

const HomePage = () => {
  // const [services, setServices] = useState([]);
  // const [categories, setCategories] = useState([]);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const qualityScrollRef = useRef(null);

  // const fetchDataServices = async () => {
  //   try {
  //     const response = await api.get("service")
  //     console.log(response.data)
  //     setServices(response.data);
  //   } catch (error) {
  //     console.log(error.response.data)
  //   }
  // }
  // const fetchDataCategories = async () => {
  //   try {
  //     const response = await api.get("category")
  //     console.log(response.data)
  //     setCategories(response.data);

  //   } catch (error) {
  //     console.log(error.response.data)
  //   }

  // }
  // useEffect(() => {
  //   fetchDataServices()
  //   fetchDataCategories()
  // }, [])

  const handleBooking = (values) => {
    message.success(`Lịch hẹn đã được đặt cho số: ${values.phoneNumber}`);
    setTimeout(() => {
      navigate('/book');
    }, 1000);
  };

  const handleFailed = () => {
    message.error('Vui lòng nhập số điện thoại hợp lệ!');
  };

  const bannerImages = [
    'https://firebasestorage.googleapis.com/v0/b/swp391-e06bc.appspot.com/o/banner1.png?alt=media&token=a61be145-af00-49ba-a498-189f344c7470',
    'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg',
    'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg'
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

  const spaServices = [
    {
      name: "Gội Massage Relax",
      price: "Giá từ 200.000đ",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_home_spa_1.png",
      link: "/sparelax/massage"
    },
    {
      name: "Lấy ráy tai êm",
      price: "Giá từ 150.000đ",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_home_spa_3.png",
      link: "/sparelax/earpick"
    }
  ];

  const highlights = [
    {
      title: "Chất lượng uy tín",
      description: "Chúng tôi cam kết mang lại cho bạn chất lượng dịch vụ hàng đầu từ những tay kéo chuyên nghiệp.",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_kgcc_1.jpg"
    },
    {
      title: "Không gian và công nghệ",
      description: "Không gian thoáng đãng, hiện đại kết hợp với công nghệ cắt tóc tiên tiến.",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_kgcc_2.png"
    }
  ];

  const qualityPartners = [
    {
      name: "Dr.FORHAIR",
      description: "Top 1 dầu gội ngăn rụng tóc chứng nhận bởi Viện nghiên cứu da liễu quốc tế.",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/7.jpeg"
    },
    {
      name: "Blairsom",
      description: "Được phát triển bởi chuyên gia với hơn 50 năm kinh nghiệm trong ngành hóa mỹ phẩm.",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/9.jpeg"
    },
    {
      name: "LoveWarmth",
      description: "Thương hiệu xuất sắc về các sản phẩm chăm sóc tóc chuyên nghiệp.",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/8.jpeg"
    },
    {
      name: "ATS for man",
      description: "Thương hiệu mỹ phẩm Quốc có hơn 32 năm uy tín.",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/6.jpeg"
    },
    {
      name: "Echosline",
      description: "Màu nhuộm cao cấp - Công thức thuần chay",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/3.jpeg"
    },
    {
      name: "Glanzen",
      description: "Sản phẩm tạo kiểu đạt chứng nhận FDA Hoa Kỳ",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/2.jpeg"
    },
    {
      name: "Dr for skin",
      description: "Thương hiệu mỹ phẩm có 11 năm nghiên cứu từ các chuyên gia hàng đầu",
      logo: "https://storage.30shine.com/web/v4/images/chat-luong-n-uy-tin/4.jpeg"
    },
  ];

  // Scroll functions for Quality & Partners
  const scrollLeft = () => {
    qualityScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    qualityScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

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
      <section id="booking-section" className="booking-section">
        <div className="container">
          <h2>Đặt lịch ngay</h2>
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
                { pattern: /^(0\d{9})$/, message: 'Vui lòng nhập số điện thoại hợp lệ!' }
              ]}
            >
              <Input placeholder="Nhập số điện thoại của bạn" className="phone-input" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="booking-btn">
              Đặt lịch
            </Button>
          </Form>
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
      <section id="highlights-section" className="highlight-section">
        <div className="container">
          <h2>Điểm nhấn nổi bật</h2>
          <Row gutter={[16, 16]} className="highlights-list">
            {highlights.map((highlight, index) => (
              <Col xs={24} sm={12} md={8} lg={8} key={index}>
                <div className="highlight-item">
                  <div className="highlight-image-wrapper"> {/* Khung cho hình ảnh */}
                    <img src={highlight.image} alt={highlight.title} className="highlight-image" />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Quality & Partners Section */}
      <section id="quality-partners-section" className="quality-section">
        <div className="container">
          <h2>Chất lượng & Đối tác</h2>
          <div className="scroll-container" ref={qualityScrollRef}>
            {qualityPartners.map((partner, index) => (
              <div className="partner-item" key={index}>
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
