import React from "react";
import './About.scss';
const About = () => {
    return (
        <div className="about-us-container">
            {/* Phần giới thiệu chính */}
            <section className="intro-section">
                <h2>Barbershop – Tỏa Sáng Thành Công</h2>
                <p>
                    Sứ mệnh: Barbershop khát vọng thổi bùng ngọn lửa chiến thắng,
                    thành công trong mỗi người đàn ông hiện đại thông qua:
                    Đội ngũ chuyên nghiệp mang đến phong cách tóc đẳng cấp.
                    Công nghệ cắt tóc tiên tiến, giúp stylist nắm bắt chính xác nhu cầu khách hàng.
                    Không gian salon hiện đại, thư giãn, chăm sóc toàn diện cho phái mạnh.
                </p>
                <ul>
                    <li>Đạt tới kỹ năng, trải nghiệm dịch vụ hiệu quả mà mỗi phong cách tóc sẽ tuyệt vời.</li>
                    <li>Công nghệ tiên tiến sẽ là động lực giúp stylist thành công mong muốn của khách hàng.</li>
                    <li>Không gian sáng tạo là nơi dành cho nghề nghiệp được cập nhật theo chuẩn thế giới.</li>
                    <li>Trải nghiệm hợp tác, nội trợ, sự giản dị, chăm sóc đa số mà không phải là chính điều gì phức tạp.</li>
                </ul>
            </section>

            {/* Phần hình ảnh */}
            <section className="image-gallery">
                <div className="gallery">
                    <img src="https://storage.30shine.com/web/v4/images/ve-30shine/2.jpg" alt="Image 1" />
                    <img src="https://storage.30shine.com/web/v4/images/ve-30shine/3.jpg" alt="Image 2" />
                    <img src="https://storage.30shine.com/web/v4/images/ve-30shine/4.jpg" alt="Image 3" />
                </div>
            </section>

            {/* Ý nghĩa logo và tầm nhìn */}
            <section className="logo-vision-section">
                <h3>Ý Nghĩa Logo Và Thương Hiệu</h3>
                <p>
                    Barbershop biểu tượng cho tuổi 30 rực rỡ -
                    độ tuổi thành công và khát vọng vươn lên của người đàn ông hiện đại.
                    Logo thể hiện qua hình ảnh nam nhân tỏa sáng cùng font chữ mạnh mẽ, khẳng định tinh thần chiến thắng.
                </p>
                <h3>Tầm Nhìn 2030</h3>
                <p>
                    1000 salon tại Việt Nam.
                    Thương hiệu biểu tượng ngành tóc Đông Nam Á, niêm yết trên thị trường chứng khoán.
                </p>
            </section>

            {/* Giá trị cốt lõi */}
            <section className="core-values-section">
                <h3>Giá Trị Cốt Lõi</h3>
                <div className="core-values-grid">
                    <div className="core-value">
                        <h4>Đổi mới</h4>
                        <p>Luôn tìm cách sáng tạo và đưa ra các giải pháp mới</p>
                    </div>
                    <div className="core-value">
                        <h4>Quan tâm</h4>
                        <p>Luôn đặt trải nghiệm khách hàng lên hàng đầu.</p>
                    </div>
                    <div className="core-value">
                        <h4>Ham học hỏi</h4>
                        <p>Cập nhật kiến thức mới mỗi ngày để tiến bộ.</p>
                    </div>
                    <div className="core-value">
                        <h4>Chân thành</h4>
                        <p>Sự chân thành trong mỗi dịch vụ.</p>
                    </div>
                    <div className="core-value">
                        <h4>Kích lệ phát triển</h4>
                        <p>Khuyến khích đội ngũ phát triển cùng nhau.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
