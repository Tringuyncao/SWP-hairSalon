// Profile.jsx
import React, { useEffect, useState } from "react";
import "./Profile.scss";

const ProfileStylish = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    storeName: "",
    storeAddress: ""
  });

  useEffect(() => {
    // Lấy thông tin người dùng và thông tin cửa hàng từ localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    const storeName = localStorage.getItem("storeName");
    const storeAddress = localStorage.getItem("storeAddress");

    // Cập nhật trạng thái với thông tin người dùng và cửa hàng
    if (storedUserInfo) {
      setUserInfo({
        ...storedUserInfo,
        storeName: storeName || "N/A",  // Nếu không có thông tin thì đặt "N/A"
        storeAddress: storeAddress || "N/A"  // Nếu không có thông tin thì đặt "N/A"
      });
    }
  }, []);

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Họ và Tên:</strong> {userInfo.fullName}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Số điện thoại:</strong> {userInfo.phone}</p>
        <p><strong>Tên cửa hàng:</strong> {userInfo.storeName}</p>
        <p><strong>Địa chỉ cửa hàng:</strong> {userInfo.storeAddress}</p>
      </div>
    </div>
  );
};

export default ProfileStylish;
