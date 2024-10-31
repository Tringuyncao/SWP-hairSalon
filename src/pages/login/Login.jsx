import { useState } from "react";
import { Button, Form, Input } from "antd";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../config/firebase";
import "./Login.scss"; // Import file SCSS
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";

const Login = () => {
  const [form] = Form.useForm(); // Ant Design form instance
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (values) => {
    try {
      const response = await api.post("login", values);
      console.log(response);
      const { id, role, token, fullName, email, phone, store } = response.data;

      // Lưu token và thông tin người dùng vào localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify({ id, role, fullName, email, phone }));

      // Nếu store tồn tại, lưu id, name và address của store vào localStorage
      if (store && store.id) {
        localStorage.setItem("storeId", store.id);
        localStorage.setItem("storeName", store.name);
        localStorage.setItem("storeAddress", store.address);
      }

      // Điều hướng dựa trên vai trò người dùng
      if (role === "ADMIN") {
        navigate("/dashboard");
      } else if (role === "STAFF") {
        navigate("/stylish");
      } else if (role === "MANAGER") {
        navigate("/manager");
      } else {
        // Mặc định chuyển đến homepage cho vai trò CUSTOMER hoặc khi role là null
        navigate("/homepage");
      }
    } catch (error) {
      toast.error(error.response?.data || "Đăng nhập thất bại!");
    }
  };

  // Function to handle Google login
  const handleLoginGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/homepage");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Google login error:", errorMessage);
      });
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>ĐĂNG NHẬP</h2>
        <Form form={form} layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Số điện thoại của anh là gì ạ?"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại của bạn!",
              },
            ]}
          >
            <Input placeholder="Ví dụ: 0912.xxx.xxx" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu của bạn!",
              },
            ]}
          >
            <Input placeholder="Mật khẩu" type="password" />
          </Form.Item>
          <Link to="/register">Don't have account? Register new account</Link>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button" block>
              TIẾP TỤC
            </Button>
          </Form.Item>

          <Form.Item>
            <Button className="button__google" onClick={handleLoginGoogle} block>
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                alt="Google"
                width={24}
                style={{ marginRight: "10px" }}
              />
              Đăng nhập với Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
