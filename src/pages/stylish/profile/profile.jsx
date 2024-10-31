// Profile.jsx
import React, { useEffect, useState } from "react";
import "./Profile.scss";

const ProfileStylish = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Lấy thông tin từ localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Họ và Tên:</strong> {userInfo.fullName}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Số điện thoại:</strong> {userInfo.phone}</p>
      </div>
    </div>
  );
};

export default ProfileStylish;
