import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // Trạng thái fade-out
  const navigate = useNavigate();

  // Kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Hiển thị thông báo thành công và kích hoạt hiệu ứng fade-out
    message.success({
      content: "Đã đăng xuất thành công!",
      duration: 2,
      onClose: () => {
        setIsFadingOut(true); // Kích hoạt hiệu ứng fade-out
        setTimeout(() => {
          localStorage.removeItem("token"); // Xóa token
          setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
          navigate("/homepage"); // Điều hướng về trang homepage sau hiệu ứng
        }, 1000); // Thời gian trễ cho hiệu ứng fade-out
      },
    });
  };

  const userMenu = (
    <Menu>
      {!isLoggedIn ? (
        <>
          <Menu.Item key="register">
            <Link to="/register">Đăng kí</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">Đăng nhập</Link>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="logout">
          <Button type="text" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <header className={`header ${isFadingOut ? "fade-out" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/homepage">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/81/45/40/1000_F_281454033_wksQgEz9SAFoqxWzGIYqvS77CNN4SMAF.jpg"
              alt="Barbershop Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Menu chính */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          className="nav-menu"
        >
          <Menu.Item key="home">
            <Link to="/homepage">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="booking">
            <Link to="/booking">Đặt lịch</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="services-section" smooth={true} duration={500}>
              Dịch vụ
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Liên hệ</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">Về Barbershop</Link>
          </Menu.Item>
        </Menu>

        {/* Nút người dùng */}
        <div className="auth-buttons">
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Button type="text" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
