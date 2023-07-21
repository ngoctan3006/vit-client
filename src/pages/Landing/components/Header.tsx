import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="landing-header d-flex justify-between items-center">
      <div className="logo d-flex justify-center items-center cursor-pointer">
        <Link to="/">
          <img src="/logo.png" width={48} height={48} alt="logo" />
        </Link>
      </div>
      <div className="wrapper d-flex">
        <div className="nav d-flex justify-between items-center">
          <div className="item">
            <Link to="#about">Thông tin chung</Link>
          </div>
          <div className="item">
            <Link to="#featured-activities">Các hoạt động nổi bật</Link>
          </div>
          <div className="item">
            <Link to="#featured-members">Những gương mặt tiêu biểu</Link>
          </div>
          <div className="item">
            <Link to="#contact">Liên hệ</Link>
          </div>
        </div>
        <button className="btn">
          <Link to="/login">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Đăng nhập</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
