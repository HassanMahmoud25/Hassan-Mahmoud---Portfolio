import React from "react";

function Speaker(props) {
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
        d="M152 80v123.7a7.9 7.9 0 003.6 6.7l11 7.3a8 8 0 0012.2-4.7l13.2-53"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M192 160a40 40 0 000-80h-40S97.5 80 45.1 36.1A8 8 0 0032 42.2v155.6a8 8 0 0013.1 6.1C97.5 160 152 160 152 160z"
      ></path>
    </svg>
  );
}

export default Speaker;
