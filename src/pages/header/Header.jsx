import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Xóa token khỏi localStorage và cập nhật trạng thái đăng nhập
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    // Hiển thị thông báo đăng xuất thành công và chuyển hướng về trang đăng nhập
    message.success("Đã đăng xuất thành công!", 2);
    navigate("/login");
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
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
        <>
          <Menu.Item key="profile">
            <Link to="/profile">Xem hồ sơ</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Button type="text" onClick={handleLogout}>
              Đăng xuất
            </Button>
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/homepage">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/81/45/40/1000_F_281454033_wksQgEz9SAFoqxWzGIYqvS77CNN4SMAF.jpg"
              alt="Barbershop Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="nav-menu">
          <Menu.Item key="home">
            <Link to="/homepage">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="booking">
            <Link to="/booking">Đặt lịch</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="#services-section" onClick={handleScrollToServices}>
              Dịch vụ
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">Về Barbershop</Link>
          </Menu.Item>
        </Menu>

        <div className="auth-buttons">
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Button type="text" icon={<UserOutlined />} className="user-icon-btn">
              {isLoggedIn && <span className="user-name">Xin chào!</span>}
            </Button>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
