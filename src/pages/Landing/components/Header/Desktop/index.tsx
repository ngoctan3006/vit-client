import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ArrowButton from 'src/components/ArrowButton';
import styles from './styles.module.scss';
import { HEADER_LINKS } from '../index';

const LandingHeaderDesktop: React.FC = () => {
  return (
    <div className={styles.landingHeader}>
      <div className="flex justify-between px-[300px] h-[90px] fixed inset-0 z-50 bg-white border-b-2 lg:desktop">
        <div className="flex justify-center items-center cursor-pointer">
          <Link to="/">
            <img src="/logo.png" width={48} height={48} alt="logo" />
          </Link>
        </div>
        <div className="flex pr-6 gap-12">
          {HEADER_LINKS.map((link, index) => (
            <div
              className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
              data-title={link.title}
              key={index}
            >
              <HashLink to={`#${link.id}`}>{link.title}</HashLink>
            </div>
          ))}
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

export default LandingHeaderDesktop;
