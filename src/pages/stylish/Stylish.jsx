import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, CalendarOutlined, LogoutOutlined, ScheduleOutlined } from "@ant-design/icons";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const Stylish = () => {
  const navigate = useNavigate();

  // Xử lý khi nhấn Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token trong localStorage
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

  // Menu items
  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Thông tin cá nhân",
      onClick: () => navigate("/stylish/profile"), // Chuyển đến trang thông tin cá nhân
    },
    {
      key: "schedule",
      icon: <CalendarOutlined />,
      label: "Lịch cắt tóc",
      onClick: () => navigate("/stylish/booking"), // Chuyển đến trang lịch cắt tóc
    },
    {
      key: "register-schedule",
      icon: <ScheduleOutlined />,
      label: "Đăng ký lịch làm việc",
      onClick: () => navigate("/stylish/register-schedule"), // Chuyển đến trang đăng ký lịch làm việc
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: handleLogout, // Gọi hàm xử lý đăng xuất
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="dark" width={200}>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={["profile"]} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Stylish Dashboard
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Stylish Dashboard ©{new Date().getFullYear()} Created by Your Company
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Stylish;
