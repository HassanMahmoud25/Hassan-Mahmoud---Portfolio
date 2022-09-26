import React from "react";

function Shop(props) {
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
        d="M48 139.6V208a8 8 0 008 8h144a8 8 0 008-8v-68.4M54 40h148a8.1 8.1 0 017.7 5.8L224 96H32l14.3-50.2A8.1 8.1 0 0154 40z"
      ></path>
      <path
        fill="none"
        stroke="#007ced"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M96 96v16a32 32 0 01-64 0V96M160 96v16a32 32 0 01-64 0V96M224 96v16a32 32 0 01-64 0V96"
      ></path>
    </svg>
  );
}

export default Shop;
