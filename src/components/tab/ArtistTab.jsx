import React, { useState } from "react";
import "./artistTab.css";
import FeaturedArtist from "../featuredArtist/FeaturedArtist";
import ArtistsInMumbai from "../artistsInMumbai/ArtistsInMumbai";

const ArtistTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="custom-container">
      <div className="tabs">
        <div className="btn-div flex justify-between">
          <div>
            <button
              className={activeTab === "tab1" ? "tablink active" : "tablink"}
              onClick={() => handleTabClick("tab1")}
            >
              Featured Artists<sup>100</sup>
            </button>
            <button
              className={activeTab === "tab2" ? "tablink active" : "tablink"}
              onClick={() => handleTabClick("tab2")}
            >
              Artists in Mumbai<sup>15</sup>
            </button>
          </div>
          <div>
            <button className="view-all-btn">VIEW ALL</button>
          </div>
        </div>

        <div
          id="tab1"
          className={
            activeTab === "tab1"
              ? "tabcontent tab-active my-5"
              : "tabcontent mt-5"
          }
        >
          <FeaturedArtist />
        </div>

        <div
          id="tab2"
          className={
            activeTab === "tab2" ? "tabcontent tab-active my-5" : "tabcontent"
          }
        >
          <ArtistsInMumbai />
        </div>
      </div>
    </div>
  );
};

export default ArtistTab;
