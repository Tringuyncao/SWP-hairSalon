import React from 'react';
import './Header.scss'; // Import file SCSS

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://i.pinimg.com/564x/be/7a/d2/be7ad2ac36e592a60eb0bb04355708cb.jpg" alt="Barbershop Logo" />
            </div>
            <nav className="nav-menu">
                <a href="/page">Trang chủ</a>
                <a href="/booking">Đặt lịch</a>
                <a href="/service">Dịch vụ</a>
                <a href="/contact">Liên hệ</a>
                <a href="/about">Về Barbershop</a>
            </nav>
            <div className="login-button">
                <a href="/login">Đăng nhập</a>
            </div>
        </header>
    );
}

export default Header;
