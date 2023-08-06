import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <HashLink to="#about">Thông tin chung</HashLink>
          </div>
          <div className="item">
            <HashLink to="#featured-activities">Các hoạt động nổi bật</HashLink>
          </div>
          <div className="item">
            <HashLink to="#featured-members">
              Những gương mặt tiêu biểu
            </HashLink>
          </div>
          <div className="item">
            <HashLink to="#contacts">Liên hệ</HashLink>
          </div>
        </div>
        <button className="btn">
          <HashLink to="/login">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Đăng nhập</span>
          </HashLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
