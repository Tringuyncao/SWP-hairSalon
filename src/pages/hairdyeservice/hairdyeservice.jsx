import React from "react";
import "./hairdyeservice.scss";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Uốn định hình nếp tóc",
    services: [
      {
        title: "Uốn Tiêu Chuẩn",
        price: "379K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/uon-tieu-chuan-1.jpg?v=2",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/uon-tieu-chuan-2.jpg?v=1",
        ],
      },
      {
        title: "Uốn Cao Cấp",
        price: "448K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-cao-cap-1.jpg",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-cao-cap-4.jpg",
        ],
      },
    ],
  },
  {
    category: "Thay đổi màu tóc",
    services: [
      {
        title: "Nhuộm Tiêu Chuẩn",
        price: "199K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-tieu-chuan-1.jpg?v=1",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-tieu-chuan-3.jpg?v=1",
        ],
      },
      {
        title: "Nhuộm Cao Cấp",
        price: "289K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-cao-cap-2.jpg",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-cao-cap-5.jpg",
        ],
      },
    ],
  },
  {
    category: "Dưỡng tóc",
    services: [
      {
        title: "Dưỡng Keratin",
        price: "119K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-keratin-2.jpg?v=1",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-keratin-1.jpg?v=1",
        ],
      },
      {
        title: "Dưỡng Phục Hồi Robo Nano",
        price: "199K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-nano-5.jpg",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-nano-6.jpg",
        ],
      },
    ],
  },
];

const HairDyeService = () => {
  return (
    <div className="hair-dye-service">
      {services.map((categoryItem, index) => (
        <div className="category-section" key={index}>
          <h2>{categoryItem.category}</h2>
          <div className="services">
            {categoryItem.services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <div className="service-images">
                  {service.images.map((img, idx) => (
                    <img
                      src={img}
                      alt={`${service.title} ${idx + 1}`}
                      key={idx}
                    />
                  ))}
                </div>
                <p className="service-price">Chỉ từ {service.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/booking">
        <button className="booking-button">Đặt Lịch Ngay</button>
      </Link>
    </div>
  );
};

export default HairDyeService;
