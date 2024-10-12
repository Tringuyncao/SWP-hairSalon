import React from "react";
import "./Combo2.scss";
import { Link } from "react-router-dom";

const Combo2 = () => {
  return (
    <div className="combo-container">
      <div className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/banner.png"
          alt="Banner"
          className="banner-image"
        />
        <h2>Combo Cắt Gội Massage Cổ Vai gáy</h2>
        <p>Giá 200K</p>
      </div>

      <div className="service-process">
        <h3>Quy Trình Dịch Vụ</h3>
        <p>Quy trình Cắt Gội & Massage lưng, cổ vai gáy giãn cơ, thư giãn xua tan căng thẳng.</p>

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
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/2.png"
              alt="Massage Huyệt Đầu"
            />
            <p>Massage Huyệt Đầu</p>
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
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/4.png"
              alt="Hút mụn Và Phun Nước Hoa Hồng"
            />
            <p>Hút mụn Và Phun Nước Hoa Hồng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/5.png"
              alt="Tẩy da chết & đắp mặt nạ"
            />
            <p>Tẩy da chết & đắp mặt nạ</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/6.png"
              alt="Massage cổ vai gáy"
            />
            <p>Massage cổ vai gáy</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/7.png"
              alt="Gội đầu & Massage đầu"
            />
            <p>Rửa tai & Massage tai</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/8.png"
              alt="Xối nước thác đổ"
            />
            <p>Xối nước thác đổ</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/9.png"
              alt="Điện di tinh chất"
            />
            <p>Điện di tinh chất</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo2/10.png"
              alt="Kéo khăn giãn cơ & đấm lưng"
            />
            <p>Kéo khăn giãn cơ & đấm lưng</p>
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

export default Combo2;
