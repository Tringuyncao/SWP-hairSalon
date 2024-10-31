import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { MailOutlined, HomeOutlined, HistoryOutlined, UserOutlined } from "@ant-design/icons"; // Sử dụng biểu tượng người dùng cho Thông tin tài khoản
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

// Các mục trong menu với các lựa chọn: Lịch hẹn, Phản hồi, Lịch sử, và Thông tin tài khoản
const items = [
  getItem("Thông tin tài khoản", "info", <UserOutlined />), // Mục Thông tin tài khoản
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
