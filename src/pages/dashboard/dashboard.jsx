import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, message } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, onClick = null) {
  return {
    key,
    icon,
    onClick,
    label: onClick ? label : <Link to={`/dashboard/${key}`}>{label}</Link>,
  };
}

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin trong localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("storeId");
    localStorage.removeItem("storeName");
    localStorage.removeItem("storeAddress");
    message.success("Đăng xuất thành công!");

    // Điều hướng đến trang đăng nhập
    navigate("/login");
  };

  const items = [
    getItem("Manage Category", "category", <PieChartOutlined />),
    getItem("Manage Service", "service", <PieChartOutlined />),
    getItem("Manage Option", "option", <PieChartOutlined />),
    getItem("Manage Store", "store", <PieChartOutlined />),
    getItem("Manage Booking", "booking", <PieChartOutlined />),
    getItem("Manage Slot", "slot", <PieChartOutlined />),
    getItem("Manage Stylish", "stylish", <TeamOutlined />), // Thêm mục Manage Stylish
    getItem("Logout", "logout", <LogoutOutlined />, handleLogout),
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>ADMIN</Breadcrumb.Item>
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
