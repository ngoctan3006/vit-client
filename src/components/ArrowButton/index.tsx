import React from 'react';
import { Link, To } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  to?: To;
}

const buttonContent = (children: React.ReactNode) => (
  <>
    <span className={`${styles.circle}`} aria-hidden="true">
      <span className={`${styles.icon} ${styles.arrow}`}></span>
    </span>
    <p className={`${styles.buttonText}`}>{children}</p>
  </>
);

const ArrowButton: React.FC<Props> = ({
  className = '',
  to,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${className} ${styles.arrowButton}`}
      onClick={onClick || (() => {})}
    >
      {to && <Link to={to}>{buttonContent(children)}</Link>}
      {!to && buttonContent(children)}
    </button>
  );
};

export default ArrowButton;
