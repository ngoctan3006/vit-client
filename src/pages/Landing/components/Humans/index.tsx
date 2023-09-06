import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const Humans: React.FC<Props> = ({ className = '' }: Props) => {
  return (
    <div
      className={`${className} ${styles.landingActivity} section bg-gray-200 px-[300px]`}
    >
      <div className="py-20">
        {
          // TODO: Code phần HOV vào đây
        }
      </div>
    </div>
  );
};

export default Humans;
