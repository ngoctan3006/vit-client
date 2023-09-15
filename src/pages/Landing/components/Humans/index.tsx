import React from 'react';
import SlidesPerView from 'src/components/Swiper/SlidesPerView';
import 'swiper/css';
import 'swiper/css/pagination';
import { DEVICE_MOBILE } from '../..';
import styles from './styles.module.scss';
import Card from 'src/components/Card';

interface Props {
  className?: string;
  device?: number;
}

const Humans: React.FC<Props> = ({ className = '', device }) => {
  return (
    <div
      className={`${className} ${styles.landingHumans} landingHumans bg-gray-200 pt-12 lg:pt-24 px-7 lg:pl-16 flex flex-col lg:flex-row text-blue-800 pb-12 lg:pb-[180px] w-full overflow-hidden`}
      id="featured-members"
    >
      <div className="w-[300px] lg:w-[440px] mx-auto flex-shrink-0 lg:mx-0">
        <p className="uppercase text-4xl font-bold">Humans of VIT</p>
        <p className="mt-6 text-justify">
          Sau đây là những người anh, người chị, người bạn, vừa là những gương
          mặt hết sức thân quen trong Đội, cũng đồng thời là những tấm gương
          tình nguyện viên xuất sắc. Họ vừa là những người trụ cột trong gia
          đình VIT, cũng đồng thời là những sinh viên có thành tích học tập và
          hoạt động tốt. Hãy cùng xem họ là ai nhé.
        </p>
        <div className="flex w-full justify-between px-20 lg:px-0 lg:w-fit lg:gap-8 mt-6">
          <div className="w-12 h-12 bg-blue-400 rounded-sm flex items-center justify-center cursor-pointer hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8 block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-12 h-12 bg-blue-400 rounded-sm flex items-center justify-center cursor-pointer hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8 block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex mt-8 lg:mt-0 lg:ml-12 w-full lg:w-[calc(100%_-_240px)] flex-shrink-0">
        <SlidesPerView
          slidesPerView={device === DEVICE_MOBILE ? 1 : 3}
          slides={[
            <Card
              className="max-w-sm"
              thumbnail="images/landing/card-thumbnail.png"
              title="Anh Phạm Minh Hiệp"
              subtitle="Đội trưởng"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />,
            <Card
              className="max-w-sm"
              thumbnail="images/landing/card-thumbnail.png"
              title="Anh Phạm Minh Hiệp"
              subtitle="Đội trưởng"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />,
            <Card
              className="max-w-sm"
              thumbnail="images/landing/card-thumbnail.png"
              title="Anh Phạm Minh Hiệp"
              subtitle="Đội trưởng"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />,
            <Card
              className="max-w-sm"
              thumbnail="images/landing/card-thumbnail.png"
              title="Anh Phạm Minh Hiệp"
              subtitle="Đội trưởng"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />,
          ]}
        ></SlidesPerView>
      </div>
    </div>
  );
};

export default Humans;
