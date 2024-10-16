import React from "react";
import "./robonano.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Robonano = () => {
  const serviceProcess = [
    {
      step: "Gọi đầu chuyên sâu",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_1.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Bổ sung dưỡng chất Amino Matrix",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_2.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Sấy lạnh thẩm thấu dưỡng chất",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_3.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
      step: "Dưỡng CMC cao cấp",
      image:
        "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_4.jpg", // Đổi thành URL trực tuyến của hình ảnh
    },
    {
        step: "Chăm sóc phục hồi bằng Robot Nano",
        image:
          "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_5.jpg", // Đổi thành URL trực tuyến của hình ảnh
      },
      {
        step: "Bổ sung tinh dầu dưỡng tóc Farcom",
        image:
          "https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/duong_nano_quy_trinh_6.jpg", // Đổi thành URL trực tuyến của hình ảnh
      },
  ];

  return (
    <div className="curling-container">
      {/* Banner */}
      <section className="banner">
        <img
          src="https://storage.30shine.com/web/v4/images/dich-vu-duong-toc/duong-phuc-hoi-robotnano/banner_duong_nano.jpg"
          alt="Dưỡng phục hồi Robot nano chỉ từ 199K"
        />
      </section>

      

      {/* Phần Quy Trình Dịch Vụ */}
      <section className="service-process">
        <h2>Quy Trình Dịch Vụ</h2>
        <p>
        Dịch vụ nhuộm tiêu chuẩn dùng cho những trường hợp tóc chắc khỏe, không khuyết điểm.
        </p>
        <div className="process-steps">
          {serviceProcess.map((step, index) => (
            <div key={index} className="process-card">
              <img src={step.image} alt={step.step} />
              <p>{step.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Đặc Quyền */}
      <section className="privilege">
        <h2>Đặc Quyền</h2>
        <p>Hỗ trợ làm lại kiểu tóc mới nếu anh chưa ưng ý.</p>
        <div className="privilege-card">
          <h3>Thẻ Chăm Sóc Khách Hàng Uốn - Nhuộm - Dưỡng</h3>
          <p>Quyền lợi VIP của khách hàng 30Shine</p>
          <ul>
            <li>
              Nếu chưa ưng ý về kiểu tóc Uốn/Nhuộm, chúng em sẵn sàng hỗ trợ làm
              lại miễn phí.
            </li>
            <li>Thời hạn: trong 7 ngày tính từ ngày anh Uốn/Nhuộm.</li>
          </ul>
        </div>
        <Link to="/booking">
          <Button className="book-now">Đặt lịch ngay</Button>
        </Link>
      </section>
    </div>
  );
};

export default Robonano;
