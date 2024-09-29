import React from 'react';
import './Footer.scss'; // Import file SCSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <a href="/about">Về chúng tôi</a>
                <a href="/homepage">Barbershop</a>
                <span>Hotline: 1922.25.3033</span>
                <a href="/privacy">Chính sách bảo mật</a>
                <span>Giờ phục vụ: Thứ 2 đến Chủ Nhật, 8h30-20h30</span>
            </div>
            <div className="footer-bottom">
                <p>© 2015 Công Ty Cổ Phần TMDV Barbershop / Địa chỉ: 186 Đinh Tiên Hoàng, Q1 / GPDKKD số 010.7467.693 do Sở KHĐT TP.HN cấp ngày 08/06/2016.</p>
                <div className="footer-logos">
                    <img src="https://30shine.com/static/media/footer_congthuongicon.f3d3b02c.png" alt="Verified logo" />
                    <img src="https://30shine.com/footer_dmca.png" alt="DMCA logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
