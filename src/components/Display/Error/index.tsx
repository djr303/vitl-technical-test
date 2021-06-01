import React from "react";

import './Error.scss';

const Error: React.FC = () => (
  <svg
    className="error"
    height="40px"
    viewBox="0 0 32 32"
    width="40px"
  >
    <g>
      <g>
        <g>
          <circle
            cx="16"
            cy="16"
            id="BG"
            r="16"
          />
          <path
            d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Error;
