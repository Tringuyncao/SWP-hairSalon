import { useState } from "react";
import { Button, Form, Input } from "antd"; // Import Ant Design components
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../../config/firebase";
import "./Login.scss"; // Import file SCSS
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";

const Login = () => {
  const [form] = Form.useForm(); // Ant Design form instance
    const navigate =useNavigate();
  // Function to handle form submission
  const handleLogin = async (values) => {
    try {
      const response = await api.post("login", values);
      console.log(response);
      const { role,token } =response.data;
      localStorage.setItem("token",token);
      // if(role === "ADMIN"){
      //   navigate("/dashboard")
      // }
      // if(role === "CUSTOMER"){
      //   navigate("/homepage")
      // }
      navigate("/homepage");
    } catch (error) {
      toast.error(error.response.data);
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
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Google login error:", errorMessage);
      });
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>ĐĂNG NHẬP</h2>
        {/* Ant Design Form */}
        <Form
          form={form}
          layout="vertical" // Optional: Makes labels appear above inputs
          onFinish={handleLogin} // Form submission handler
        >
          {/* Phone number field */}
          <Form.Item
            label="Số điện thoại của anh là gì ạ?"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại của bạn!",
              },
              // {
              //     pattern: /^[0-9]{10,11}$/,
              //     message: 'Số điện thoại không hợp lệ! Phải là 10-11 số.',
              // },
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
              // {
              //     pattern: /^[0-9]{10,11}$/,
              //     message: 'Số điện thoại không hợp lệ! Phải là 10-11 số.',
              // },
            ]}
          >
            <Input placeholder="Mật khẩu" type="password" />
          </Form.Item>
          <Link to="/register">Don't have account? Register new account</Link>
          {/* Submit button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              block
            >
              TIẾP TỤC
            </Button>
          </Form.Item>

          {/* Google Login button */}
          <Form.Item>
            <Button
              className="button__google"
              onClick={handleLoginGoogle}
              block
            >
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
