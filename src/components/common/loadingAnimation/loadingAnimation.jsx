import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-container__spinner">
        <div className="loading-container__lines" />
      </div>
      <div className="loading-container__message">
        <p>Please wait a moment...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
