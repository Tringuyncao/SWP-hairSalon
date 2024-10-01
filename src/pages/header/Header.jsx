import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

const Header = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="register">
        <Link to="/register">Đăng kí</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Đăng nhập</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
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
            <a href="#services-section">Dịch vụ</a>
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
