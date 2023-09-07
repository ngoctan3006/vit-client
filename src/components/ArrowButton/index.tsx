import React from 'react';
import { Link, To } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  to?: To;
}

const ButtonContent: React.FC<React.ReactNode> = (
  children: React.ReactNode
) => (
  <>
    <span className={`${styles.circle}`} aria-hidden="true">
      <span className={`${styles.icon} ${styles.arrow}`}></span>
    </span>
    <p className={`${styles.buttonText}`}>{children}</p>
  </>
);

/**
 * If props "to" is passed, the button would be treated as a react-router-dom Link component.
 * Otherwise, props "onClick" should be passed. The button would then be treated as a normal button.
 */
const ArrowButton: React.FC<Props> = ({
  className = '',
  to,
  children,
  onClick,
}) => {
  if (to) {
    return (
      <Link to={to}>
        <button
          className={`${className} ${styles.arrowButton}`}
          onClick={onClick || (() => {})}
        >
          {ButtonContent(children)}
        </button>
      </Link>
    );
  }
  return (
    <button
      className={`${className} ${styles.arrowButton}`}
      onClick={onClick || (() => {})}
    >
      {ButtonContent(children)}
    </button>
  );
};

export default ArrowButton;
