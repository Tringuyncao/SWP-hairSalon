import React, { useState, useEffect } from "react";
import {
  Steps,
  Button,
  Form,
  DatePicker,
  message,
  Modal,
  List,
  Checkbox,
  Radio,
  Badge,
  Drawer,
} from "antd";
import {
  HomeOutlined,
  ScissorOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import api from "../../config/axios"; // Import axios đã cấu hình
import { useNavigate } from "react-router-dom";
import "./BookingSlot.scss";

const { Step } = Steps;

const BookingSlot = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [isSalonModalVisible, setIsSalonModalVisible] = useState(false);
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]); // Lưu nhiều dịch vụ
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [salons, setSalons] = useState([]);
  const [services, setServices] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loadingSalons, setLoadingSalons] = useState(false);
  const [loadingServices, setLoadingServices] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); // Hiển thị giỏ hàng
  const navigate = useNavigate();

  // Lấy danh sách salon từ API
  useEffect(() => {
    const fetchSalons = async () => {
      setLoadingSalons(true);
      try {
        const response = await api.get("store");
        setSalons(response.data);
      } catch (error) {
        message.error("Không thể tải danh sách salon!");
      } finally {
        setLoadingSalons(false);
      }
    };
    fetchSalons();
  }, []);

  // Lấy danh sách dịch vụ từ API
  useEffect(() => {
    const fetchServices = async () => {
      setLoadingServices(true);
      try {
        const response = await api.get("option");
        setServices(response.data);
      } catch (error) {
        message.error("Không thể tải danh sách dịch vụ!");
      } finally {
        setLoadingServices(false);
      }
    };
    fetchServices();
  }, []);

  // Lấy danh sách slot khả dụng từ API
  const fetchSlots = async (date) => {
    setLoadingSlots(true);
    try {
      const response = await api.get(`slot?date=${date}`);
      setSlots(response.data);
    } catch (error) {
      message.error("Không thể tải danh sách slot!");
    } finally {
      setLoadingSlots(false);
    }
  };

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  const handleFinish = async (values) => {
    try {
      const { date } = values;
      const token = localStorage.getItem("token");

      if (!token) {
        message.error("Bạn cần đăng nhập để thực hiện đặt lịch!");
        return;
      }

      const data = {
        storeId: selectedSalon?.id || 0,
        orderDetailRequests: selectedServices.map((service) => ({
          optionId: service.id,
          staffId: 20, // Mặc định staffId là 20
        })),
        slotId: selectedSlot?.id || 0,
        date: date.format("YYYY-MM-DD"),
      };

      console.log("Dữ liệu gửi đi:", data);

      const response = await api.post("api/booking", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Phản hồi từ server:", response);

      message.success("Lịch hẹn đã được đặt thành công!");
      navigate("/homepage");
    } catch (error) {
      if (error.response) {
        console.error("Lỗi từ API:", error.response.data);
        message.error(
          `Lỗi từ API: ${error.response.data.message || "Vui lòng thử lại!"}`
        );
      } else if (error.request) {
        console.error("Lỗi yêu cầu:", error.request);
        message.error("Không thể kết nối đến server, vui lòng kiểm tra mạng.");
      } else {
        console.error("Lỗi khác:", error.message);
        message.error("Đã xảy ra lỗi, vui lòng thử lại!");
      }
    }
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Thất bại:", errorInfo);
    message.error("Vui lòng hoàn thành các bước đặt lịch!");
  };

  const handleDateChange = (date) => {
    if (date) {
      fetchSlots(date.format("YYYY-MM-DD"));
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSalonSelect = (salon) => {
    setSelectedSalon(salon);
    setIsSalonModalVisible(false);
  };

  const handleServiceSelect = (selectedServiceIds) => {
    const selected = services.filter((service) =>
      selectedServiceIds.includes(service.id)
    );
    setSelectedServices(selected);
  };

  const steps = [
    {
      title: "Chọn salon",
      content: (
        <div>
          <Button
            icon={<HomeOutlined />}
            block
            style={{ marginBottom: "10px" }}
            onClick={() => setIsSalonModalVisible(true)}
          >
            Xem tất cả salon
          </Button>
          {selectedSalon && <div>Đã chọn: {selectedSalon.name}</div>}
        </div>
      ),
    },
    {
      title: "Chọn dịch vụ",
      content: (
        <div>
          <Button
            icon={<ScissorOutlined />}
            block
            style={{ marginBottom: "10px" }}
            onClick={() => setIsServiceModalVisible(true)}
          >
            Xem tất cả dịch vụ
          </Button>
          {selectedServices.length > 0 && (
            <div>
              {selectedServices.map((service) => (
                <div key={service.id}>
                  <CheckCircleOutlined /> {service.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Chọn ngày, slot & stylist",
      content: (
        <div>
          <Form.Item
            name="date"
            rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}
          >
            <DatePicker
              placeholder="Chọn ngày"
              className="custom-datepicker"
              onChange={handleDateChange}
            />
          </Form.Item>

          <div>
            <h4>Chọn slot thời gian:</h4>
            {loadingSlots ? (
              <p>Đang tải slot...</p>
            ) : (
              <Radio.Group
                onChange={(e) => handleSlotSelect(e.target.value)}
                value={selectedSlot}
              >
                {slots.map((slot) => (
                  <Radio key={slot.id} value={slot}>
                    {slot.startTime} - {slot.endTime}
                  </Radio>
                ))}
              </Radio.Group>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="booking-page">
      <h2>Đặt lịch giữ chỗ</h2>
      <Steps
        current={currentStep}
        direction="vertical"
        className="steps-container"
      >
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            icon={
              index === 0 ? (
                <HomeOutlined />
              ) : index === 1 ? (
                <ScissorOutlined />
              ) : (
                <CalendarOutlined />
              )
            }
          />
        ))}
      </Steps>

      <Form
        form={form}
        name="booking"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        layout="vertical"
        className="booking-form"
      >
        <div className="step-content">{steps[currentStep].content}</div>

        <div className="steps-action">
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={next} block>
              Tiếp theo
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Chốt giờ cắt
              </Button>
            </Form.Item>
          )}
          {currentStep > 0 && (
            <Button type="default" onClick={prev} block>
              Quay lại
            </Button>
          )}
        </div>
      </Form>

      {/* Giỏ hàng */}
      <div className="cart">
        <Badge count={selectedServices.length}>
          <ShoppingCartOutlined
            className="cart-icon"
            onClick={() => setCartVisible(true)}
          />
        </Badge>
      </div>

      <Drawer
        title="Giỏ hàng"
        placement="right"
        onClose={() => setCartVisible(false)}
        visible={cartVisible}
      >
        <List
          dataSource={selectedServices}
          renderItem={(service) => (
            <List.Item>
              <CheckCircleOutlined /> {service.name}
            </List.Item>
          )}
        />
      </Drawer>

      {/* Modal chọn salon */}
      <Modal
        title="Danh sách salon"
        visible={isSalonModalVisible}
        onCancel={() => setIsSalonModalVisible(false)}
        footer={null}
      >
        <List
          bordered
          loading={loadingSalons}
          dataSource={salons}
          renderItem={(item) => (
            <List.Item onClick={() => handleSalonSelect(item)}>
              {item.name} - {item.address}
            </List.Item>
          )}
        />
      </Modal>

      {/* Modal chọn dịch vụ */}
      <Modal
        title="Danh sách dịch vụ"
        visible={isServiceModalVisible}
        onCancel={() => setIsServiceModalVisible(false)}
        footer={null}
      >
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={handleServiceSelect}
        >
          <List
            bordered
            loading={loadingServices}
            dataSource={services}
            renderItem={(item) => (
              <List.Item>
                <Checkbox value={item.id}>
                  {item.name} - {item.description}
                </Checkbox>
              </List.Item>
            )}
          />
        </Checkbox.Group>
      </Modal>
    </div>
  );
};

export default BookingSlot;
