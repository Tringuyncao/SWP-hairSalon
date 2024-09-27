import React from "react";
import "./hairdyeservice.scss";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Uốn định hình nếp tóc",
    services: [
      {
        title: "Uốn Tiêu Chuẩn",
        description: "Định hình tóc phồng đẹp tự nhiên, vào nếp bền đẹp mỗi ngày",
        price: "379K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/uon-tieu-chuan-1.jpg?v=2",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/uon-tieu-chuan-2.jpg?v=1",
        ],
      },
      {
        title: "Uốn Cao Cấp",
        description: "Mang lại độ phồng và sóng tóc tự nhiên cao cấp, giữ nếp lâu hơn.",
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
        description: "Màu nhuộm chuẩn sắc, bền màu và an toàn cho tóc.",
        price: "199K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-tieu-chuan-1.jpg?v=1",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/nhuom-tieu-chuan-3.jpg?v=1",
        ],
      },
      {
        title: "Nhuộm Cao Cấp",
        description: "Sản phẩm cao cấp với bảng màu đa dạng, giúp tóc bóng mượt và giữ màu lâu.",
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
        description: "Phục hồi tóc hư tổn từ bên trong, giúp tóc khỏe mạnh và bóng mượt.",
        price: "119K",
        images: [
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-keratin-2.jpg?v=1",
          "https://storage.30shine.com/web/v4/images/dich-vu-uon-nhuom-duong/duong-keratin-1.jpg?v=1",
        ],
      },
      {
        title: "Dưỡng Phục Hồi Robo Nano",
        description: "Công nghệ phục hồi tóc tiên tiến, cho tóc mềm mượt và chắc khỏe từ gốc.",
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
                <p>{service.description}</p> {/* Thêm mô tả dịch vụ */}
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
