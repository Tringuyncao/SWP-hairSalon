import React from "react";
import "./premiumdyeing.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

const PremiumDyeing = () => {
  const OfficeOptions = [
    {
      name: "Ánh Cam",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_cong_so_1.jpg",
    },
    {
      name: "Ánh cam",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_cong_so_2.jpg",
    },
    {
      name: "Nâu",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_cong_so_3.jpg",
    },
    {
      name: "Đỏ",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_cong_so_4.jpg",
    },
  ];

  const FashionDyeing = [
    {
      name: "Hồng",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuomtt_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Tím",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuomtt_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Cam",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuomtt_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      name: "Nâu Khói",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuomtt_4.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  const BlackDyeingOptions = [
    {
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_den_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_den_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/nhuom_den_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  const serviceProcess = [
    {
      step: "Kiểm tra & đánh giá chất tóc",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Nhuộm Davines cao cấp",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/quy_trinh_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Xả tóc",
      image:
        "https://storage.30shine.com/web/v4/images/uon/uon-tieu-chuan/uon_tieu_chuan_quy_trinh_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Sấy vuốt tạo kiểu",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/quy_trinh_5.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
  ];

  return (
    <div className="curling-container">
      {/* Banner */}
      <section className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/dich-vu-nhuom/chi-tiet/banner_chi_tiet_nhuom_cao_cap.jpg"
          alt="Nhuộm màu cao cấp chỉ từ 289K"
        />
      </section>

      {/* Phần Uốn Basic */}
      <section className="basic-curling">
        <h2>Nhuộm Công Sở</h2>

        <div className="curling-options">
          {OfficeOptions.map((option, index) => (
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
        <h2>Nhuộm Thời Trang</h2>
        <div className="curling-options">
          {FashionDyeing.map((option, index) => (
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
        <h2>Nhuộm Đen Phủ Bạc</h2>
        <p>Phủ bạc thuần chay Echo Vegan chỉ 199K</p>
        <div className="trend-options">
          {BlackDyeingOptions.map((option, index) => (
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
        <p>
        Dịch vụ nhuộm tiêu chuẩn dùng cho những trường hợp tóc chắc khỏe, không khuyết điểm.
        </p>
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

export default PremiumDyeing;
