import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ArrowButton from 'src/components/ArrowButton';
import { HEADER_LINKS } from '../index';
import styles from './styles.module.scss';

const LandingHeaderDesktop: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.landingHeader}>
      <div className="flex justify-between px-[24px] h-[90px] fixed inset-0 z-50 bg-white border-b-2 lg:desktop">
        <div className="flex justify-center items-center cursor-pointer">
          <Link to="/">
            <img src="/logo.png" width={48} height={48} alt="logo" />
          </Link>
        </div>
        <div
          className="my-auto"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
        <div
          className={`fixed z-60 top-0 right-0 w-3/4 h-screen bg-gray-200 ease-in-out duration-300 ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div
            className="my-auto absolute top-7 right-6"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
          <div className="flex flex-col pr-8 gap-8 mt-32 items-end">
            {HEADER_LINKS?.map((link, index) => (
              <div
                className={`${styles.navLink} my-auto text-center hover:text-blue-800 hover:font-bold`}
                data-title={link.title}
                key={index}
              >
                <HashLink
                  to={`#${link.id}`}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {link.title}
                </HashLink>
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
      </div>
    </div>
  );
};

export default LandingHeaderDesktop;
