import React from "react";

import './Loading.scss';

const Loading: React.FC = () => (
  <svg
    className="loading"
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="20"
      cy="20"
      fill="none"
      stroke="#333333"
      strokeWidth="4"
      r="18"
      strokeDasharray="80.53096491487338363080458826494 20"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 20 20;360 20 20"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default Loading;
