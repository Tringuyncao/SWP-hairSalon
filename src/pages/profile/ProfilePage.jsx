import React, { useState } from "react";
import { Layout, Button, Avatar, Menu, theme } from "antd";
import { MailOutlined, PhoneOutlined, HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// Hàm để tạo các mục trong Menu bao gồm label, key, icon, và children
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label: <Link to={`/dashboard/${key}`}>{label}</Link>, // Sử dụng Link cho các đường dẫn tương ứng
  };
}

// Các mục trong menu với đường dẫn tương ứng và mục con (children)
const items = [
  getItem("Cập nhật thông tin cá nhân", "update-info", <UserOutlined />),
  getItem("Lịch hẹn của tôi", "my-appointments", <HomeOutlined />, [
    getItem("Lịch hẹn hôm nay", "today-appointments", <HomeOutlined />),
    getItem("Lịch hẹn tuần này", "week-appointments", <HomeOutlined />),
  ]),
  getItem("Lịch sử của tôi", "my-history", <HomeOutlined />),
  getItem("Tin nhắn", "messages", <HomeOutlined />),
];

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Màu xanh nhạt hơn cho thanh nav để hài hòa với header trắng và footer xanh biển */}
      <Sider
        width={300}
        style={{
          background: "#6699CC", // Màu xanh biển nhạt cho thanh nav
          padding: "20px",
          color: "#fff",
        }}
        trigger={null}  // Ẩn nút thu gọn (trigger)
        collapsible={false}  // Tắt khả năng thu gọn
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Avatar size={150} style={{ backgroundColor: "#ccc", marginBottom: "15px", display: 'inline-block' }}>
            150 x 150
          </Avatar>
          <h2 style={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem", marginTop: "10px" }}>Nguyễn Văn A</h2>
          <p style={{ color: "#E6F2FF", marginBottom: "5px" }}>
            <MailOutlined /> nguyenvana@example.com
          </p>
          <p style={{ color: "#E6F2FF", marginBottom: "20px" }}>
            <PhoneOutlined /> 0123456789
          </p>
          <Button
            type="primary"
            style={{
              width: "100%",
              marginBottom: "10px",
              backgroundColor: "#5A9BD5", // Màu xanh biển trung tính cho nút Trang chủ
              borderColor: "#5A9BD5",
              textAlign: 'center',
              color: "#fff"
            }}
          > 
          <Link to="/homepage">
            <HomeOutlined /> Trang chủ
            </Link>
          </Button>
          <Button
            type="default"
            style={{
              width: "100%",
              marginBottom: "20px",
              backgroundColor: "#84B3E5", // Màu xanh biển nhạt hơn cho nút Thoát ra
              color: "#fff",
              borderColor: "#84B3E5",
              textAlign: 'center'
            }}
          >
            <Link to="/login">
            <LogoutOutlined /> Thoát ra
            </Link>
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          style={{
            background: "transparent",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#FFFFFF", // Header trắng
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        />
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* Outlet để hiển thị các component con */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#336699", padding: "10px 50px", color: "#fff" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Profile;
