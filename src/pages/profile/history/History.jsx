import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './History.scss';

const History = () => {
  // Dữ liệu mẫu người dùng
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    avatar: 'https://via.placeholder.com/150', // Đường dẫn ảnh thật nếu có
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-info">
          <img src={user.avatar} alt="Avatar" className="profile-avatar" />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">Email: {user.email}</p>
          <p className="profile-phone">Số điện thoại: {user.phone}</p>
        </div>
        <div className="actions">
          <Link to="/homepage">
          <button className="btn btn-home">Trang chủ</button>
          </Link>
          <Link to="/login">
          <button className="btn btn-logout">Thoát ra</button>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/update-profile">Cập nhật thông tin cá nhân</Link></li>
            <li><Link to="/favorites">Lịch hẹn của tôi</Link></li>
            <li><Link to="/orders">Lịch sử của tôi</Link></li>
            <li><Link to="/messages">Tin nhắn</Link></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default History;
