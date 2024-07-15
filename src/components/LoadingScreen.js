import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..." />
    </div>
  );
};

export default LoadingScreen;
