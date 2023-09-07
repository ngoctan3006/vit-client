import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ArrowButton from 'src/components/ArrowButton';
import styles from './styles.module.scss';

const LandingHeader: React.FC = () => {
  return (
    <div className={styles.landingHeader}>
      <div className="flex justify-between px-[300px] h-[90px] fixed inset-0 z-50 bg-white border-b-2">
        <div className="flex justify-center items-center cursor-pointer">
          <Link to="/">
            <img src="/logo.png" width={48} height={48} alt="logo" />
          </Link>
        </div>
        <div className="flex pr-6 gap-12">
          <div
            className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
            data-title="Thông tin chung"
          >
            <HashLink to="#about">Thông tin chung</HashLink>
          </div>
          <div
            className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
            data-title="Các hoạt động nổi bật"
          >
            <HashLink to="#featured-activities">Các hoạt động nổi bật</HashLink>
          </div>
          <div
            className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
            data-title="Những gương mặt tiêu biểu"
          >
            <HashLink to="#featured-members">
              Những gương mặt tiêu biểu
            </HashLink>
          </div>
          <div
            className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
            data-title="Liên hệ"
          >
            <HashLink to="#contact">Liên hệ</HashLink>
          </div>
          <div
            className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
          >
            <ArrowButton to="/login" className="w-44">
              Đăng nhập
            </ArrowButton>
          </div>
        </div>
      </div>
      <div className="flex py-6 justify-center items-center bg-blue-800 mt-[90px]">
        <p className="text-white text-center text-2xl font-bold tracking-widest uppercase">
          Đội Sinh viên tình nguyện trường CNTT và TT
        </p>
      </div>
    </div>
  );
};

export default LandingHeader;
