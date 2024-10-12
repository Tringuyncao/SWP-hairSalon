import React from "react";
import "./Combo3.scss";
import { Link } from "react-router-dom";

const Combo3 = () => {
  return (
    <div className="combo-container">
      <div className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/banner.png"
          alt="Banner"
          className="banner-image"
        />
        <h2>Combo cắt gội massage đá nóng himalaya</h2>
        <p>Giá 300K</p>
      </div>

      <div className="service-process">
        <h3>Quy Trình Dịch Vụ</h3>
        <p>Quy trình Cắt Gội & Massage bấm lưng, cổ vai gáy bằng đá nóng giãn cơ, thư giãn xua tan căng thẳng.</p>

        <div className="services">
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/1.png"
              alt="Massage vùng lưng"
            />
            <p>Massage vùng lưng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/2.png"
              alt="Massage nửa lưng dưới thắt lưng"
            />
            <p>Massage nửa lưng dưới thắt lưng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/3.png"
              alt="Massage đá nóng lưng"
            />
            <p>Massage đá nóng lưng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/4.png"
              alt="Quấn đai nóng lưng"
            />
            <p>Quấn đai nóng lưng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/5.png"
              alt="Massage mở huyệt mặt"
            />
            <p>Massage mở huyệt mặt</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/6.png"
              alt="Rửa mặt"
            />
            <p>Rửa mặt</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/7.png"
              alt="Massage mặt"
            />
            <p>Massage mặt</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/8.png"
              alt="Hút mụn"
            />
            <p>Hút mụn</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/9.png"
              alt="Phun hoa hồng"
            />
            <p>Phun hoa hồng</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/10.png"
              alt="Gội đầu"
            />
            <p>Gội đầu</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/11.png"
              alt="Massage đầu"
            />
            <p>Massage đầu</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/12.png"
              alt="Rửa tai & Ngoáy tai"
            />
            <p>Rửa tai & Ngoáy tai</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/13.png"
              alt="Xối nước thác đổ"
            />
            <p>Xối nước thác đổ</p>
          </div>
          <div className="service-item">
            <img
              src="https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/14.png"
              alt="Massage tay"
            />
            <p>Massage tay</p>
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

export default Combo3;
