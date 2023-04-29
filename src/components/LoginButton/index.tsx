import React from 'react';
import './index.scss';

interface Props {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const LogginButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div className="login-button-wrap">
      <div className="login-btn-wrap">
        <div className="login-bg"></div>
        <button className="login-btn" onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default LogginButton;
