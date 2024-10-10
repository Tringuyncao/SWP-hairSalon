import React from "react";
import "./Combo0.scss";
import { Link } from "react-router-dom";

const Combo0 = () => {
  return (
    <div className="combo-container">
      <div className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/banner.png"
          alt="Banner"
          className="banner-image"
        />
        <h2>Cắt Gọi Khoang Thương Gia</h2>
        <p>Giá 139K</p>
      </div>

      <div className="service-process">
        <h3>Quy Trình Dịch Vụ</h3>
        <p>
          Dịch vụ Cắt Tóc Khoang Thương Gia - Mang đến trải nghiệm dịch vụ đỉnh
          cao lần đầu tiên xuất hiện tại Việt Nam
        </p>

        <div className="services">
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/1.png"
              alt="Khai Huyệt"
            />
            <p>Khai Huyệt</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/2.png"
              alt="Rửa mặt & Massage mặt"
            />
            <p>Rửa mặt & Massage mặt</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/3.png"
              alt="Hút mụn"
            />
            <p>Hút mụn</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/4.png"
              alt="Phun Hoa Hồng"
            />
            <p>Phun Hoa Hồng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/5.png"
              alt="Gội đầu & Massage đầu"
            />
            <p>Gội đầu & Massage đầu</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/6.png"
              alt="Rửa tai & Ngoáy tai"
            />
            <p>Rửa tai & Ngoáy tai</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/7.png"
              alt="Xối nước thác đổ"
            />
            <p>Xối nước thác đổ</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/8.png"
              alt="Cắt tóc"
            />
            <p>Cắt tóc</p>
          </div>
        </div>
      </div>

      <Link to="/booking">
        <button className="booking-button">Đặt Lịch Ngay</button>
      </Link>
    </div>
  );
};

export default Combo0;
