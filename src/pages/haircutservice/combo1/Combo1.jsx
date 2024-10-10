import React from "react";
import "./Combo1.scss";
import { Link } from "react-router-dom";

const Combo1 = () => {
  return (
    <div className="combo-container">
      <div className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/banner.png"
          alt="Banner"
          className="banner-image"
        />
        <h2>Combo Cắt Gọi Massage</h2>
        <p>Giá 150K</p>
      </div>

      <div className="service-process">
        <h3>Quy Trình Dịch Vụ</h3>
        <p>
        Dịch vụ được yêu thích nhất bao gồm Cắt - Gội - Massage thư giãn
        </p>

        <div className="services">
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/1.png"
              alt="Khai Huyệt"
            />
            <p>Khai Huyệt Điều Hòa</p>
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
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/5.png"
              alt="Xối Mắt Thác Đổ"
            />
            <p>Xối Mắt Thác Đổ</p>
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
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/7.png"
              alt="Thư Giản Cổ"
            />
            <p>Thư giản Cổ</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/8.png"
              alt="Đấm Lưng Thư Giản"
            />
            <p>Đấm Lưng Thư Giản</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutThuongGia/8.png"
              alt="Cắt tóc"
            />
            <p>Cắt tóc</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/10.png"
              alt="Xả Sạch Tóc Con"
            />
            <p>Xả Sạch Tóc Con</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo1/11.png"
              alt="Sấy Tóc"
            />
            <p>Sấy Tóc</p>
          </div>
        </div>
      </div>
      <Link to="/booking">
        <button className="booking-button">Đặt Lịch Ngay</button>
      </Link>
    </div>
  );
};

export default Combo1;
