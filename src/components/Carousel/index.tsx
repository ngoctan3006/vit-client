import { Carousel as AntDCarousel } from 'antd';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const NextArrow = (props: { onClick: any; }) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute right-0 top-1/2 -translate-y-1/2 w-14 h-44 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 cursor-pointer z-10 group`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:rotate-45 before:w-6 before:h-6 before:border-t-4 before:border-r-4 before:-top-2 before:-right-[8px] before:transition-all before:duration-300 before:border-white before:border-opacity-50 group-hover:before:border-opacity-100"></span>
    </div>
  );
};

const PrevArrow = (props: { onClick: any; }) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute left-0 top-1/2 -translate-y-1/2 w-14 h-44 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 cursor-pointer z-10 group`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:-rotate-45 before:w-6 before:h-6 before:border-t-4 before:border-l-4 before:-top-2 before:-left-[8px] before:transition-all before:duration-300 before:border-white before:border-opacity-50 group-hover:before:border-opacity-100"></span>
    </div>
  );
};

const settings = {
  nextArrow: <NextArrow onClick={undefined} />,
  prevArrow: <PrevArrow onClick={undefined} />,
};

const Carousel: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      <AntDCarousel
        className={`${styles.customCarousel}`}
        autoplay
        arrows
        {...settings}
      >
        {children}
      </AntDCarousel>
    </div>
  );
};

export default Carousel;
