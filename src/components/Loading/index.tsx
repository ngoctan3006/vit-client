import animationData from 'assets/lotties/loading.json';
import React from 'react';
import Lottie from 'react-lottie';
import './index.scss';

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loading-container">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default Loading;
