import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-main-div py-10 pb-24 lg:pb-0">
      <div className="custom-container">
        <div className="grid grid-cols-6">
          <div className="col-span-1 lg:col-span-2 mb-5">
            <img src="/images/footer-logo.png" alt="footer-logo" />
          </div>
          <div className="col-span-full lg:col-span-2 text-white">
            <div className="grid grid-cols-2">
              <div className="col-span-1 footer-links">
                <div>
                  <a href="">Artists</a>
                </div>
                <div>
                  <a href="">Business</a>
                </div>
                <div>
                  <a href="">Collectors</a>
                </div>
                <div>
                  <a href="">Everyone</a>
                </div>
              </div>
              <div className="col-span-1 footer-links">
                <div>
                  <a href="">contact Us</a>
                </div>
                <div>
                  <a href="">Privacy Policy</a>
                </div>
                <div>
                  <a href="">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="mt-10 lg:mt-0 col-span-full lg:col-span-1 text-white">
            © 2024
            <br />
            Democrart Technologies
            <br />
            Private Limited
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
