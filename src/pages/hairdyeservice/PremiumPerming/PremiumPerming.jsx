import React from "react";
import "./PremiumPerming.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

const PremiumPerming = () => {
  const PremiumPermingOptions = [
    {
      name: "Uốn Basic",
      price: "379.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_hair_style_1.jpg",
    },
    {
      name: "Uốn Cao Cấp",
      price: "449.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_hair_style_2.jpg",
    },
  ];

  const kPermOptions = [
    {
      name: "Comma Perm",
      price: "478.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_kperm_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Quiff Perm",
      price: "398.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_kperm_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Fit Perm",
      price: "418.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_kperm_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Kid Perm",
      price: "348.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_kperm_4.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Roof Perm",
      price: "478.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_kperm_5.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  const trendOptions = [
    {
      name: "Con Sâu",
      price: "599.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_hair_style_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Premlock",
      price: "899.000Đ",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_basic_hair_style_4.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  const serviceProcess = [
    {
      step: "Kiểm tra & đánh giá chất tóc",
      image: "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Uốn tóc",
      image: "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
        step: "Định hình nếp tóc",
        image: "https://storage.30shine.com/web/v4/images/uon/uon-cao-cap/quy_trinh_dinh_hinh_nep_toc.jpg", // Đổi thành URL trực tuyến của hình ảnh
      },
    {
      step: "Xả tóc",
      image: "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
        step: "Dưỡng",
        image: "https://storage.30shine.com/web/v4/images/uon/uon-cao-cap/quy_trinh_duong.jpg", // Đổi thành URL trực tuyến của hình ảnh
      },
    {
      step: "Sấy vuốt tạo kiểu",
      image: "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_4.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  return (
    <div className="curling-container">
      {/* Banner */}
      <section className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/uon/uon-cao-cap/banner_uon_cao_cap.jpg"
          alt="Uốn cao cấp Chỉ từ 448k"
        />
      </section>

      {/* Phần Uốn Basic */}
      <section className="basic-curling">
        <h2>Uốn Basic</h2>
        <p>Tóc uốn phong cách đơn giản, nhẹ nhàng và tinh tế</p>
        <div className="curling-options">
          {PremiumPermingOptions.map((option, index) => (
            <div key={index} className="curling-card">
              <img src={option.image} alt={option.name} />
              <div className="curling-info">
                <h3>{option.name}</h3>
                <p>{option.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Uốn Định Hình K-Perm */}
      <section className="kperm-curling">
        <h2>Uốn Định Hình K-Perm</h2>
        <p>Đa dạng phong cách, phù hợp với mọi khuôn mặt</p>
        <div className="curling-options">
          {kPermOptions.map((option, index) => (
            <div key={index} className="curling-card">
              <img src={option.image} alt={option.name} />
              <div className="curling-info">
                <h3>{option.name}</h3>
                <p>{option.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Uốn Xu Hướng */}
      <section className="hot-trend">
        <h2>Uốn Xu Hướng</h2>
        <p>Tóc uốn Hot trend</p>
        <div className="trend-options">
          {trendOptions.map((option, index) => (
            <div key={index} className="trend-card">
              <img src={option.image} alt={option.name} />
              <div className="trend-info">
                <h3>{option.name}</h3>
                <p>{option.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Quy Trình Dịch Vụ */}
      <section className="service-process">
        <h2>Quy Trình Dịch Vụ</h2>
        <p>Sử dụng thuốc uốn ATS cao cấp, bổ sung thêm dưỡng chất phục hồi tóc. Thường được các KOLs, Celeb tin dùng.</p>
        <div className="process-steps">
          {serviceProcess.map((step, index) => (
            <div key={index} className="process-card">
              <img src={step.image} alt={step.step} />
              <p>{step.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Đặc Quyền */}
      <section className="privilege">
        <h2>Đặc Quyền</h2>
        <p>Hỗ trợ làm lại kiểu tóc mới nếu anh chưa ưng ý.</p>
        <div className="privilege-card">
          <h3>Thẻ Chăm Sóc Khách Hàng Uốn - Nhuộm - Dưỡng</h3>
          <p>Quyền lợi VIP của khách hàng 30Shine</p>
          <ul>
            <li>
              Nếu chưa ưng ý về kiểu tóc Uốn/Nhuộm, chúng em sẵn sàng hỗ trợ làm
              lại miễn phí.
            </li>
            <li>Thời hạn: trong 7 ngày tính từ ngày anh Uốn/Nhuộm.</li>
          </ul>
        </div>
        <Link to="/booking">
        <Button className="book-now">Đặt lịch ngay</Button>
        </Link>
      </section>
    </div>
  );
};

export default PremiumPerming;
