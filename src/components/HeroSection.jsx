import React from "react";
import Button from "./Button";
import heroSectionImage from "@/assets/home_hero_image.avif";

const HeroSection = () => {
  return (
    <section className="HeroSection constantSpacing">
      <div className="container">
        <div className="row align-items-center row-gap-5">
          <div className="col-lg-6">
            <div className="heroContent">
              <h1 className="lgHeading">Transform Your Digital Presence</h1>
              <p className="mainText my-4">
                Vibroxa Studio delivers cutting-edge digital solutions to help
                businesses thrive in the modern world. From development to
                marketing, we've got you covered.
              </p>

              <div className="flexDiv">
                <Button value="Get Started" />
                <Button value="View Work" className="outlineButton" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="heroImageContainer p-lg-5 p-0">
              <img
                src={heroSectionImage}
                alt="image"
                className="heroSectionImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
