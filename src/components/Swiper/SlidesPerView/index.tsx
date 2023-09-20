import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      navigation={{
        nextEl: '.image-swiper-button-next',
        prevEl: '.image-swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      }}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidesPerView;
