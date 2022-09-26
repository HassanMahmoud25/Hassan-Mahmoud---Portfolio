import React from "react";

function Coffee(props) {
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
        d="M88 24L88 56"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M120 24L120 56"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M152 24L152 56"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M32 216L208 216"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M83.3 216A88 88 0 0132 136V88h176v48a88 88 0 01-51.3 80"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M208 88h0a32 32 0 0132 32v8a32 32 0 01-32 32h-3.4"
      ></path>
    </svg>
  );
}

export default Coffee;
