import { Button, Form, Input } from "antd";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Play background music if desired
    const audio = new Audio("https://firebasestorage.googleapis.com/v0/b/swp391-e06bc.appspot.com/o/Sao%20h%E1%BA%A1ng%20A%20-%20HIEUTHUHAI%2CSong%20Lu%C3%A2n%2C%20D%C6%B0%C6%A1ng%20Domic%2C%20Jsol%20%20%23nhachaymoingay%20%23anhtraisayhi%20%23hieuthuhai.mp3?alt=media&token=aa1a4ce8-dd82-4cb7-aa20-0eb2be1d563c");
    audio.loop = true; // Loop the music
    audio.play();
    return () => {
      audio.pause(); // Pause music on unmount
    };
  }, []);

  const handleRegister = async (values) => {
    try {
      values.role = "CUSTOMER";
      const response = await api.post("register", values);
      toast.success("Successfully registered new account!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-container animated">
        <h2>ĐĂNG KÝ</h2>
        <Form onFinish={handleRegister} labelCol={{ span: 24 }}>
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên của bạn!" },
            ]}
          >
            <Input placeholder="Nhập họ và tên" prefix={<i className="fas fa-user" />} />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" prefix={<i className="fas fa-lock" />} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Vui lòng nhập đúng định dạng email!" },
            ]}
          >
            <Input placeholder="Nhập email" prefix={<i className="fas fa-envelope" />} />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              {
                pattern: /^[0-9]{10,11}$/,
                message: "Số điện thoại không hợp lệ! (10-11 số)",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" prefix={<i className="fas fa-phone" />} />
          </Form.Item>

          <Link to="/login">Bạn đã có tài khoản? Đi đến trang đăng nhập </Link>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-button">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
