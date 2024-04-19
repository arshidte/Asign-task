import React from "react";
import "./handpicked.css";

const Handpicked = () => {
  return (
    <div className="handpicked-card-div mt-10">
      <div className="handpicked-card ga-3">
        <img src="images/handpicked/hp1.png" alt="hp1" />
        <h4 className="my-3">Upcoming abstract artists</h4>
        <button className="rounded-full">VIEW</button>
      </div>
      <div className="handpicked-card ga-3">
        <img src="images/handpicked/hp1.png" alt="hp1" />
        <h4 className="my-3">Upcoming abstract artists</h4>
        <button className="rounded-full">VIEW</button>
      </div>
      <div className="handpicked-card ga-3">
        <img src="images/handpicked/hp1.png" alt="hp1" />
        <h4 className="my-3">Upcoming abstract artists</h4>
        <button className="rounded-full">VIEW</button>
      </div>
    </div>
  );
};

export default Handpicked;
