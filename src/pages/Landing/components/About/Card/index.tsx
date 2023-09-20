import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ className = '', icon, label, children }) => {
  return (
    <div
      className={`${className} ${styles.card} px-11 pt-6 pb-9 flex flex-col gap-[18px] justify-center items-center bg-white rounded-2xl w-full lg:w-1/4 h-fit shadow-[3px_6px_4px_0px_rgba(0,0,0,0.40)]`}
    >
      <div className="w-20 h-20">{icon}</div>
      <p className="text-[32px] text-center">{label}</p>
      <div className="text-xl">{children}</div>
    </div>
  );
};

export default Card;
