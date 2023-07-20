import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="landing-header d-flex justify-between items-center">
      <div className="logo d-flex justify-center items-center cursor-pointer">
        <img src="/logo.png" width={48} height={48} alt="logo" />
      </div>
      <div className="wrapper d-flex">
        <div className="nav d-flex justify-between items-center">
          <div className="item">
            <a href="#about">Thông tin chung</a>
          </div>
          <div className="item">
            <a href="#featured-activities">Các hoạt động nổi bật</a>
          </div>
          <div className="item">
            <a href="#featured-members">Những gương mặt tiêu biểu</a>
          </div>
          <div className="item">
            <a href="#contact">Liên hệ</a>
          </div>
        </div>
        <button className="btn">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Đăng nhập</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
