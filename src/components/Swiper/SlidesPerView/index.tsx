import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';

interface Props {
  classNames?: string;
  slides: React.ReactNode[];
  slidesPerView?: number | 'auto';
  spaceBetween?: number | string;
  pagination?: {
    clickable?: boolean;
  };
}

const SlidesPerView: React.FC<Props> = ({
  slides,
  slidesPerView,
  spaceBetween,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Pagination]}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidesPerView;
