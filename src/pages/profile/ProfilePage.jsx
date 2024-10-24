import React, { useState } from "react";
import { Layout, Button, Avatar, Menu, theme } from "antd";
import { MailOutlined, HomeOutlined, LogoutOutlined, UserOutlined, HistoryOutlined } from "@ant-design/icons";  // Thêm biểu tượng lịch sử
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// Hàm để tạo các mục trong Menu bao gồm label, key, icon
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label: <Link to={`/profile/${key}`}>{label}</Link>, // Sử dụng Link cho các đường dẫn tương ứng
  };
}

// Các mục trong menu với 3 lựa chọn: Lịch hẹn, Phản hồi, và Lịch sử
const items = [
  getItem("Lịch hẹn", "appointment", <HomeOutlined />),  // Mục Lịch hẹn
  getItem("Phản hồi", "feedback", <MailOutlined />),     // Mục Phản hồi
  getItem("Lịch sử", "history", <HistoryOutlined />),    // Mục Lịch sử
];

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
            nguyenvana@example.com
          </p>
          <p style={{ color: "#E6F2FF", marginBottom: "20px" }}>
            0123456789
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
