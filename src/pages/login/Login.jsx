import { useEffect } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../../config/firebase";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Play background music to match Register page
    const audio = new Audio("https://firebasestorage.googleapis.com/v0/b/swp391-e06bc.appspot.com/o/Sao%20h%E1%BA%A1ng%20A%20-%20HIEUTHUHAI%2CSong%20Lu%C3%A2n%2C%20D%C6%B0%C6%A1ng%20Domic%2C%20Jsol%20%20%23nhachaymoingay%20%23anhtraisayhi%20%23hieuthuhai.mp3?alt=media&token=aa1a4ce8-dd82-4cb7-aa20-0eb2be1d563c");
    audio.loop = true; // Loop the music
    audio.play();
    return () => {
      audio.pause(); // Pause music on unmount
    };
  }, []);

  const handleLogin = async (values) => {
    try {
      const response = await api.post("login", values);
      const { id, role, token, fullName, email, phone, store } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify({ id, role, fullName, email, phone }));

      if (store && store.id) {
        localStorage.setItem("storeId", store.id);
        localStorage.setItem("storeName", store.name);
        localStorage.setItem("storeAddress", store.address);
      }

      switch (role) {
        case "ADMIN":
          navigate("/dashboard");
          break;
        case "STAFF":
          navigate("/stylish");
          break;
        case "MANAGER":
          navigate("/manager");
          break;
        default:
          navigate("/homepage");
      }
    } catch (error) {
      toast.error(error.response?.data || "Đăng nhập thất bại!");
    }
  };

  const handleLoginGoogle = async () => {
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      navigate("/homepage");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container animated">
        <h2>ĐĂNG NHẬP</h2>
        <Form form={form} layout="vertical" onFinish={handleLogin} labelCol={{ span: 24 }}>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại của bạn!" }]}
          >
            <Input
              placeholder="Nhập số điện thoại"
              prefix={<i className="fas fa-phone" />}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu của bạn!" }]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu"
              prefix={<i className="fas fa-lock" />}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Nhớ tài khoản</Checkbox>
            <Link to="/forgot-password" className="forgot-password-link">
              Quên mật khẩu?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button" block>
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="button-group">
              <Button className="button__google" onClick={handleLoginGoogle}>
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google"
                />
                <span>Đăng nhập với Google</span>
              </Button>
            </div>
          </Form.Item>
          <Link to="/register" className="register-link">
            Bạn chưa có tài khoản? Đăng ký tài khoản mới
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
