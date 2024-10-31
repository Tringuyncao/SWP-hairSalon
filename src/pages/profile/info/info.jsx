import React from 'react';
import './info.scss';

const Info = () => {
  // Lấy thông tin người dùng từ localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { fullName, email, phone } = userInfo || {};

  return (
    <div className="info-container">
      <h2>Thông tin cá nhân</h2>
      <div className="info-item">
        <span className="label">Họ và tên:</span>
        <span className="value">{fullName || "Chưa có thông tin"}</span>
      </div>
      <div className="info-item">
        <span className="label">Email:</span>
        <span className="value">{email || "Chưa có thông tin"}</span>
      </div>
      <div className="info-item">
        <span className="label">Số điện thoại:</span>
        <span className="value">{phone || "Chưa có thông tin"}</span>
      </div>
    </div>
  );
};

export default Info;
