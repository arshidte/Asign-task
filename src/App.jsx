import { useState } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Following from "./components/following/Following";
import Handpicked from "./components/handpicked/Handpicked";
import ArtistTab from "./components/tab/ArtistTab";
import Accordion from "./components/accordion/Accordion";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="custom-container pt-20 pb-10 cards-main">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">
            Artists you follow<sup className="text-base">&nbsp;21</sup>
          </h2>
          <div>
            <button className="view-all-btn">VIEW ALL</button>
          </div>
        </div>
        <Following />
      </div>

      <div className="custom-container py-10 cards-main">
        <div className="flex justify-between items-center">
          <div className="heading-div">
            <h2 className="text-3xl hidden md:block">Handpicked for you</h2>
            <p className="hidden md:block">
              Based on artists you follow on Asign
            </p>
            <h2 className="text-xl md:hidden">Artists curated for you</h2>
            <p className="md:hidden text-sm">
              Thoughtfully curated collections of artists from different styles
              and movements to help you find the art you love.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="view-all-btn">VIEW ALL</button>
          </div>
        </div>
        <Handpicked />
        <div className="md:hidden">
          <button className="view-all-btn">VIEW ALL</button>
        </div>
      </div>
      <ArtistTab />

      <div className="hidden md:block my-10 face-img">
        <img className="w-full" src="images/face-art.png" alt="face-art" />
        <h4>Trending on Asign</h4>
        <button className="rounded-full">VIEW ALL</button>
      </div>

      <div className="md:hidden face-img-mob">
        <div className="custom-container">
          <h4>Trending on Asign</h4>
          <button className="custom-button rounded-full my-5">VIEW ALL</button>
        </div>
        <img
          className="w-full"
          src="images/face-art-mob.png"
          alt="face-img-mob"
        />
      </div>

      <div className="knowledge-centre lg:px-40 lg:py-20">
        <h3>Knowledge Centre</h3>
        <Accordion title="What is Discover for Artists?">
          Content for Accordion 1
        </Accordion>
        <Accordion title="How does Asign help me discover new artists?">
          Content for Accordion 2
        </Accordion>
        <p className="text-xs text-center mt-6">
          Have more questions?{" "}
          <span className="underline">REQUEST A CALLBACK</span>
        </p>
      </div>

      <Footer />

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </>
  );
}

export default App;
