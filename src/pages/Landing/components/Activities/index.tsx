import React from 'react';
import styles from './styles.module.scss';
import Card from 'src/components/Card';

interface Props {
  className?: string;
}

const Activities: React.FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={`${className} ${styles.landingActivity} section bg-white px-7 lg:px-[300px]`}
      id="featured-activities"
    >
      <div className="title text-blue-800 border-b-blue-800">
        Các hoạt động tiêu biểu
      </div>
      <div className={`pt-20 ${styles.featuredActivities}`}>
        <ul>
          <li><p>Jan 2023</p></li>
          <li>
            <Card
              className="max-w-md"
              thumbnail="images/landing/card-thumbnail.png"
              title="Xuân yêu thương 2023"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />
          </li>
          <li>
            <Card
              className="max-w-md"
              thumbnail="images/landing/card-thumbnail.png"
              title="Xuân yêu thương 2023"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />
          </li>
          <li>
            <Card
              className="max-w-md"
              thumbnail="images/landing/card-thumbnail.png"
              title="Xuân yêu thương 2023"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />
          </li>
          <li>
            <Card
              className="max-w-md"
              thumbnail="images/landing/card-thumbnail.png"
              title="Xuân yêu thương 2023"
              description="Chiến dịch Xuân yêu thương tại xã Đồng Tiến, huyện Ứng Hòa, Hà Nội tuy ngắn nhưng đã đọng lại trong tâm thức của các TNV VIT cùng toàn thể bà con làng xóm nơi đây những cảm xúc xôn xao khó tả."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
