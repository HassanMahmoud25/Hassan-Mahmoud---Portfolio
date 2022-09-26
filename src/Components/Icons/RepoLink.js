import React from "react";

function RepoLink(props) {
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
        strokeWidth="16"
        d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"
      ></path>
      <circle
        cx="128"
        cy="128"
        r="40"
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
    </svg>
  );
}

export default RepoLink;