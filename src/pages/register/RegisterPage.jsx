import { Button, Form, Input } from 'antd';
import './Register.scss';

function RegisterPage() {
    const handleFinish = (value) => {
        console.log(value);
    };

    return (
        <div className="register-overlay">
            <div className="register-container">
                <h2>ĐĂNG KÝ</h2>
                <Form
                    onFinish={handleFinish}
                    labelCol={{ span: 24 }}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        rules={[{ required: true, message: 'Vui lòng nhập họ và tên của bạn!' }]}
                    >
                        <Input placeholder="Nhập họ và tên" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu!' },
                            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }
                        ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập email!' },
                            { type: 'email', message: 'Vui lòng nhập đúng định dạng email!' }
                        ]}
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                            { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ! (10-11 số)' }
                        ]}
                    >
                        <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="register-button">Đăng ký</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default RegisterPage;
