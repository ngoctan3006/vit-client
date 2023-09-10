import React from 'react';
import styles from './styles.module.scss';

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
      <div className="py-20">
        {
          // TODO: Code phần các hoạt động vào đây
        }
      </div>
    </div>
  );
};

export default Activities;
