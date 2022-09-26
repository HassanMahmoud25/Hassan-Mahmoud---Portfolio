import React from "react";

function Star(props) {
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
        d="M132.4 190.7l50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 012.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 01-7.3-5.4l-22-55.4a8.3 8.3 0 00-15.6 0l-22 55.4a8.3 8.3 0 01-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 012.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 018.8 0z"
      ></path>
    </svg>
  );
}

export default Star;
