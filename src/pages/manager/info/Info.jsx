import React, { useEffect, useState } from "react";
import "./Info.scss";

const InfoManager = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    storeName: "",
    storeAddress: "",
  });

  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi component được tải
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
    const storeName = localStorage.getItem("storeName") || "";
    const storeAddress = localStorage.getItem("storeAddress") || "";

    setUserInfo({
      fullName: storedUserInfo.fullName || "",
      email: storedUserInfo.email || "",
      phone: storedUserInfo.phone || "",
      storeName,
      storeAddress,
    });
  }, []);

  return (
    <div className="info-container">
      <h2>Thông tin tài khoản</h2>
      <div className="info-item">
        <span className="label">Họ và Tên:</span>
        <span className="value">{userInfo.fullName}</span>
      </div>
      <div className="info-item">
        <span className="label">Email:</span>
        <span className="value">{userInfo.email}</span>
      </div>
      <div className="info-item">
        <span className="label">Số điện thoại:</span>
        <span className="value">{userInfo.phone}</span>
      </div>
      <div className="info-item">
        <span className="label">Tên cửa hàng:</span>
        <span className="value">{userInfo.storeName}</span>
      </div>
      <div className="info-item">
        <span className="label">Địa chỉ:</span>
        <span className="value">{userInfo.storeAddress}</span>
      </div>
    </div>
  );
};

export default InfoManager;
