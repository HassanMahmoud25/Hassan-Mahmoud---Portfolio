import React from "react";

function Icon(props) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="#007ced"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M133.7 211.9l81-81c19.9-20 22.8-52.7 4-73.6a52 52 0 00-75.5-2.1L128 70.5l-13.1-13.2c-20-19.9-52.7-22.8-73.6-4a52 52 0 00-2.1 75.5l83.1 83.1a8.1 8.1 0 0011.4 0z"
      ></path>
    </svg>
  );
}

export default Icon;
