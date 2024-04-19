import React from "react";
import "./mobileMenu.css";

const MobileMenu = () => {
  return (
    <div className="sticky-menu">
      <ul className="flex justify-around items-center">
        <li>
          <div className="flex flex-col items-center gap-2 mobile-menu-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9987 11.38C14.0864 11.38 15.7787 9.57128 15.7787 7.34005C15.7787 5.10882 14.0864 3.30005 11.9987 3.30005C9.91111 3.30005 8.21875 5.10882 8.21875 7.34005C8.21875 9.57128 9.91111 11.38 11.9987 11.38Z"
                stroke="#CCCCCC"
                stroke-miterlimit="10"
              />
              <path
                d="M4 21.8601V19.4701C4 16.7101 6.09 14.4701 8.67 14.4701H15.32C17.9 14.4701 19.99 16.7101 19.99 19.4701V21.8401"
                stroke="#CCCCCC"
                stroke-miterlimit="10"
              />
            </svg>
            You
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center gap-2 mobile-menu-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2059_709)">
                <path d="M4 21V3" stroke="#CCCCCC" stroke-miterlimit="10" />
                <path
                  d="M9.36719 21V3"
                  stroke="#CCCCCC"
                  stroke-miterlimit="10"
                />
                <path
                  d="M18.9987 21.1119L13.3281 3.11194"
                  stroke="#CCCCCC"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_2059_709">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Catalogue
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center gap-2 mobile-menu-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2059_720)">
                <rect
                  x="4"
                  y="3"
                  width="1.25843"
                  height="18"
                  fill="white"
                  stroke="white"
                  stroke-width="0.8"
                />
                <rect
                  x="8.77344"
                  y="3"
                  width="1.25843"
                  height="18"
                  fill="white"
                  stroke="white"
                  stroke-width="0.8"
                />
                <rect
                  x="12.9297"
                  y="3.76807"
                  width="1.25843"
                  height="18"
                  transform="rotate(-21.1892 12.9297 3.76807)"
                  fill="white"
                  stroke="white"
                  stroke-width="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_2059_720">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Discover
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
