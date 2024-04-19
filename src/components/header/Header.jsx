import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="custom-container">
        <div className="top-bar flex justify-between items-center py-2">
          <div className="logo">
            <img className="logo" src="images/Logo.png" alt="logo" />
          </div>
          <div className="hidden md:flex">
            <div className="p-2">
              <a className="flex gap-2" href="#">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4987 11.38C14.5864 11.38 16.2787 9.57128 16.2787 7.34005C16.2787 5.10882 14.5864 3.30005 12.4987 3.30005C10.4111 3.30005 8.71875 5.10882 8.71875 7.34005C8.71875 9.57128 10.4111 11.38 12.4987 11.38Z"
                    stroke="#696969"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M4.5 21.86V19.47C4.5 16.71 6.59 14.47 9.17 14.47H15.82C18.4 14.47 20.49 16.71 20.49 19.47V21.84"
                    stroke="#696969"
                    strokeMiterlimit="10"
                  />
                </svg>
                <span>You</span>
              </a>
            </div>
            <div className="p-2">
              <a className="flex gap-2" href="#">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2003_206)">
                    <path
                      d="M4.5 21V3"
                      stroke="#696969"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M9.86719 21V3"
                      stroke="#696969"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M19.4987 21.1118L13.8281 3.11182"
                      stroke="#696969"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2003_206">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Catalogue
              </a>
            </div>
            <div className="p-2">
              <a className="flex gap-2" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2003_217)">
                    <rect
                      x="4"
                      y="3"
                      width="1.25843"
                      height="18"
                      fill="#1D1D1D"
                      stroke="#1D1D1D"
                      strokeWidth="0.8"
                    />
                    <rect
                      x="8.77344"
                      y="3"
                      width="1.25843"
                      height="18"
                      fill="#1D1D1D"
                      stroke="#1D1D1D"
                      strokeWidth="0.8"
                    />
                    <rect
                      x="12.9297"
                      y="3.76807"
                      width="1.25843"
                      height="18"
                      transform="rotate(-21.1892 12.9297 3.76807)"
                      fill="#1D1D1D"
                      stroke="#1D1D1D"
                      strokeWidth="0.8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2003_217">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Discover
              </a>
            </div>
          </div>
          <div className="flex gap-5">
            <span className="md:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2059_382)">
                  <path
                    d="M15.6781 13.97L8.32812 13.97"
                    stroke="black"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M12.9609 11.2499L15.6809 13.9699L12.9609 16.6899"
                    stroke="black"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M14.71 21.6H21.5V6.52002H19.3H2.5V21.6H13.32H14.71Z"
                    stroke="black"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M6.21875 6.51009L11.9988 2.59009L18.6088 6.55009"
                    stroke="black"
                    stroke-miterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2059_382">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2003_242)">
                  <path
                    d="M21.49 17.55L21.5 2.51001H2.52L2.51 17.75L2.5 21.04L7.11 17.58L21.49 17.55Z"
                    stroke="#1D1D1D"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2003_242">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 21.51H1.5L5 6.51001H11L11.5 6.50024H17L20.5 21.51Z"
                  stroke="#1D1D1D"
                  strokeMiterlimit="10"
                />
                <path
                  d="M8.03704 10.0002C8.03704 10.0002 7.44444 1.00024 11 1.00024C14.5556 1.00024 13.963 10.0002 13.963 10.0002"
                  stroke="#1D1D1D"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom-bar flex justify-center items-center gap-5 md:gap-7">
        <div className="item active">Artists</div>
        <div className="item">Businesses</div>
        <div className="item">Auctions</div>
        <div className="item">Events</div>
      </div>
    </>
  );
};

export default Header;
