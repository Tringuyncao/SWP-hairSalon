import React, { useState } from "react";
import {
  UserOutlined,
  CalendarOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { Link, useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, onClick) {
  return {
    key,
    icon,
    label: onClick ? (
      <Button type="text" onClick={onClick} style={{ color: "#fff" }}>
        {label}
      </Button>
    ) : (
      <Link to={`/manager/${key}`}>{label}</Link>
    ),
  };
}

const Manager = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("userInfo"); // Optionally remove user info if stored
    localStorage.removeItem("storeId");
    localStorage.removeItem("storeName");
    localStorage.removeItem("storeAddress");
    navigate("/login"); // Redirect to login page
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Navigation items for Manager
  const items = [
    getItem("Thông tin tài khoản", "info", <UserOutlined />),
    getItem("Quản lí đặt lịch", "booking", <CalendarOutlined />),
    getItem("Quản lí Stylish", "managestylish", <TeamOutlined />),
    getItem("Quản lí lịch làm", "manageschedule", <TeamOutlined />),
    getItem("Đăng xuất", "logout", <LogoutOutlined />, handleLogout),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["account"]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Manager</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Manager;
