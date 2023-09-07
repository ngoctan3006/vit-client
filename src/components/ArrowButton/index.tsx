import React from 'react';
import { Link, To } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  to?: To;
}

interface ContentProps {
  children?: React.ReactNode;
}

const ButtonContent: React.FC<ContentProps> = ({ children }) => (
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
          <ButtonContent>{children}</ButtonContent>
        </button>
      </Link>
    );
  }
  return (
    <button
      className={`${className} ${styles.arrowButton}`}
      onClick={onClick || (() => {})}
    >
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
};

export default ArrowButton;
