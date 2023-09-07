import React, { useLayoutEffect, useState } from 'react';
import { BREAKPOINT_XL } from 'src/utils';
import {
  About,
  Activities,
  Banner,
  Contact,
  HeaderDesktop,
  HeaderMobile,
  Humans,
} from './components';
import './index.scss';

const Landing: React.FC = () => {
  const [showToTop, setShowToTop] = useState<boolean>(false);
  /**
   * 0 - Mobile
   * 1 - Desktop
   */
  const [device, setDevice] = useState<number>(0);

  useLayoutEffect(() => {
    function updateDeviceByScreenSize() {
      const breakpointXL = Number.parseInt(BREAKPOINT_XL.replace('px', ''));

      if (innerWidth > breakpointXL) {
        setDevice(1);
      } else {
        setDevice(0);
      }
    }

    window.addEventListener('resize', updateDeviceByScreenSize);

    updateDeviceByScreenSize();

    return () => window.removeEventListener('resize', updateDeviceByScreenSize);
  }, []);

  useLayoutEffect(() => {
    function updateShowToTopOnWindowScroll() {
      if (window.scrollY > 800) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    }

    window.addEventListener('scroll', updateShowToTopOnWindowScroll);

    updateShowToTopOnWindowScroll();

    return () =>
      window.removeEventListener('resize', updateShowToTopOnWindowScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="page landing-page">
        {device ? <HeaderDesktop /> : <HeaderMobile />}
        <Banner />
        {/* <About />
        <Activities />
        <Humans />
        <Contact /> */}
        {showToTop && (
          <button
            type="button"
            className="!fixed bottom-5 right-5 rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg"
            onClick={scrollToTop}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Landing;
