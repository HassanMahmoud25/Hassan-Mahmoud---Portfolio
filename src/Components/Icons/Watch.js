import React from "react";

function Watch(props) {
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
        cy="128"
        r="72"
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
        d="M128 88L128 128 168 128"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M88 68.1l6.8-37.5a8 8 0 017.9-6.6h50.6a8 8 0 017.9 6.6l6.8 37.5M88 187.9l6.8 37.5a8 8 0 007.9 6.6h50.6a8 8 0 007.9-6.6l6.8-37.5"
      ></path>
    </svg>
  );
}

export default Watch;
