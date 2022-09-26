import React from "react";

function Location(props) {
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
      <circle
        cx="128"
        cy="104"
        r="32"
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></circle>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 01160 0z"
      ></path>
    </svg>
  );
}

export default Location;
