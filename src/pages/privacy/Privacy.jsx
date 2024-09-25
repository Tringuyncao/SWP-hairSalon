import React from 'react';
import { Typography, Card } from 'antd';
import './Privacy.scss';

const { Title, Paragraph } = Typography;

const Privacy = () => {
    return (
        <div className="privacy-container">
            <Card className="privacy-card">
                <Typography>
                    <Title level={2}>CHÍNH SÁCH BẢO MẬT VÀ XỬ LÝ DỮ LIỆU CÁ NHÂN</Title>

                    <Title level={3}>1. Phạm vi thu thập dữ liệu</Title>
                    <Paragraph>
                        Barbershop thu thập thông tin cá nhân của Người dùng bao gồm: Họ tên, số điện thoại, email, địa chỉ, và thông tin về vị trí khi sử dụng dịch vụ.
                        Người dùng có trách nhiệm cung cấp thông tin chính xác và cập nhật thường xuyên. Barbershop không chịu trách nhiệm nếu có sự tranh chấp liên quan
                        đến thông tin không chính xác hoặc giả mạo.
                    </Paragraph>

                    <Title level={3}>2. Mục đích thu thập dữ liệu</Title>
                    <Paragraph>
                        Thông tin cá nhân được thu thập để:
                        <ul>
                            <li>Xác nhận danh tính và hỗ trợ dịch vụ cho khách hàng.</li>
                            <li>Cung cấp thông tin về đơn hàng, địa chỉ nhận hàng và địa điểm salon gần nhất.</li>
                            <li>Cải thiện chất lượng dịch vụ, cá nhân hóa trải nghiệm của khách hàng.</li>
                            <li>Giới thiệu các chương trình ưu đãi và dịch vụ mới từ Barbershop.</li>
                        </ul>
                    </Paragraph>

                    <Title level={3}>3. Những người có thể tiếp cận thông tin</Title>
                    <Paragraph>
                        Thông tin cá nhân của Người dùng có thể được chia sẻ với:
                        <ul>
                            <li>Nhân viên công ty có nhiệm vụ chăm sóc khách hàng, phân tích kinh doanh và xử lý thông tin.</li>
                            <li>Đối tác, bên thứ ba cung cấp dịch vụ hỗ trợ như giao hàng, phân tích dữ liệu và lưu trữ máy chủ.</li>
                        </ul>
                        Barbershop cam kết không chia sẻ thông tin của Người dùng cho bên thứ ba vì mục đích thương mại mà không có sự đồng ý của khách hàng,
                        trừ trường hợp được yêu cầu bởi cơ quan pháp luật.
                    </Paragraph>

                    <Title level={3}>4. Rủi ro có thể xảy ra</Title>
                    <Paragraph>
                        Mặc dù Barbershop áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu cá nhân, nhưng vẫn có nguy cơ thông tin bị rò rỉ do tấn công mạng
                        hoặc lỗi hệ thống. Trong những trường hợp này, Barbershop sẽ nỗ lực khắc phục và bảo đảm quyền lợi của khách hàng.
                    </Paragraph>

                    <Title level={3}>5. Phương thức xử lý dữ liệu</Title>
                    <Paragraph>
                        Barbershop sử dụng phần mềm mã hóa và các hệ thống bảo mật để đảm bảo dữ liệu cá nhân của Người dùng được bảo vệ khỏi truy cập trái phép.
                        Chúng tôi cũng áp dụng các biện pháp kiểm soát truy cập và giám sát an ninh để phát hiện và ngăn chặn các mối đe dọa.
                    </Paragraph>

                    <Title level={3}>6. Thời gian lưu trữ dữ liệu</Title>
                    <Paragraph>
                        Thông tin cá nhân của Người dùng sẽ được lưu trữ cho đến khi Người dùng yêu cầu xóa bỏ hoặc khi Barbershop không còn cần thiết lưu trữ dữ liệu đó.
                    </Paragraph>

                    <Title level={3}>7. Chỉnh sửa và xóa bỏ dữ liệu</Title>
                    <Paragraph>
                        Người dùng có quyền chỉnh sửa hoặc yêu cầu xóa bỏ dữ liệu cá nhân của mình. Barbershop sẽ hỗ trợ xử lý yêu cầu nhưng không chịu trách nhiệm về
                        các gián đoạn dịch vụ khi thông tin bị xóa bỏ.
                    </Paragraph>

                    <Title level={3}>8. Cam kết bảo mật dữ liệu cá nhân</Title>
                    <Paragraph>
                        Barbershop cam kết thực hiện các biện pháp bảo mật tốt nhất để bảo vệ dữ liệu cá nhân của Người dùng, bao gồm các hệ thống tường lửa, mã hóa
                        và kiểm soát truy cập. Thông tin chỉ được chia sẻ khi cần thiết để cung cấp dịch vụ hoặc theo yêu cầu của pháp luật.
                    </Paragraph>

                    <Title level={3}>9. Giải quyết khiếu nại</Title>
                    <Paragraph>
                        Người dùng có thể gửi khiếu nại về việc bảo vệ thông tin cá nhân qua địa chỉ sau:
                        <ul>
                            <li>Barbershop</li>
                            <li>Địa chỉ: 186 Đinh Tiên Hoàng, Q1</li>
                            <li>Điện thoại: 1922.25.3033</li>
                            <li>Email: cskh@barbershop.com</li>
                        </ul>
                        Barbershop sẽ tiếp nhận và giải quyết khiếu nại trong vòng 7 ngày làm việc đối với các trường hợp đơn giản, và tối đa 30 ngày cho các khiếu nại phức tạp.
                    </Paragraph>
                </Typography>
            </Card>
        </div>
    );
};

export default Privacy;
