import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="custom-container">
        <div className="grid grid-cols-6 py-11">
          <div className="col-span-6 md:col-span-2 flex flex-col justify-between">
            <div className="tag rounded-xl mb-8">Spotlight</div>
            <div className="banner-profile flex items-start flex-col gap-12">
              <div className="flex items-start flex-col gap-6">
                <img
                  className="rounded-full"
                  src="images/profile-pic.png"
                  alt="profile-pic"
                />
                <h4>Bharti Kher</h4>
                <p>
                  Bharti Kher is a trans-cultural artist, drawing <br />
                  experiences from both her British and Indian roots.
                </p>
              </div>
              <button className="rounded-3xl custom-button mb-8 md:mb-0">LEARN MORE</button>
              <div className="hidden md:flex gap-4">
                <div className="bg-white rounded-full px-5 py-4">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.67188 11.3335L1.33857 6.00016L6.67188 0.66683"
                      stroke="#696969"
                      stroke-width="1.33333"
                    />
                  </svg>
                </div>
                <div className="bg-white rounded-full px-5 py-4">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.32812 0.666504L6.66143 5.99984L1.32812 11.3332"
                      stroke="#303030"
                      stroke-width="1.33333"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4">
            <img className="w-full" src="images/banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
