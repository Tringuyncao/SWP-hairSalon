import React from 'react';
import './haircutservice.scss';
import { Link } from 'react-router-dom';

const HaircutService = () => {
  const services = [
    { id: 1, name: 'Cắt gội khoang thương gia', time: '50 Phút', description: 'Combo cắt kỹ\nCombo gội massage', image: 'https://plus.unsplash.com/premium_photo-1661288528400-212e4f7c23f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGhhaXJjdXR8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: 'Cắt gội Combo 1', time: '45 Phút', description: 'Combo cắt kỹ\nCombo gội massage', image: 'https://plus.unsplash.com/premium_photo-1682090689948-2c8b24f501b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnMlMjBoYWlyY3V0fGVufDB8fDB8fHww' },
    { id: 3, name: 'Cắt gội Combo 2', time: '55 Phút', description: 'Combo cắt kỹ\nCombo gội massage cổ vai gáy', image: 'https://media.istockphoto.com/id/872361244/fr/photo/homme-faire-sa-barbe-bord%C3%A9e-de-rasoir-%C3%A9lectrique.webp?a=1&b=1&s=612x612&w=0&k=20&c=qlZEyGfUFUmpQBKOayM7Mo4m4OZ9IuFa1lUqL-APR9E=' },
    { id: 4, name: 'Cắt gội Combo 3', time: '65 Phút', description: 'Combo cắt kỹ\nCombo gội massage bằng đá nóng', image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/CutCombo4/3.png' },
  ];

  return (
    <div className="haircut-service">
      <h2>CẮT TÓC</h2>
      <p>Trải nghiệm cắt tóc phong cách dành riêng cho phái mạnh, vừa tiện lợi vừa thư giãn tại đây</p>
      <div className="service-list">
        {services.map(service => (
          <div className="service-item" key={service.id}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="time">{service.time}</p>

            <Link to={`/haircutservice/combo${service.id}`}> {/* Chuyển đến trang combo1 */}

              <button>Tìm hiểu thêm</button>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/booking">
        <button className="booking-btn">ĐẶT LỊCH NGAY</button>
      </Link>
    </div>
  );
};

export default HaircutService;
