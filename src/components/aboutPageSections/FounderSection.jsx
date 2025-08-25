import React from "react";
import founderImage from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section className="HeroSection constantSpacing">
      <div className="container">
        <div className="row align-items-center row-gap-5">
          <div className="col-lg-6">
            <div className="heroImageContainer p-lg-5 p-0">
              <img
                src={founderImage}
                alt="image"
                className="heroSectionImage"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heroContent">
              <h1 className="lgHeading ">Meet Our Founder</h1>
              <h3 className="mdHeading  my-4">Muhammad Ashfaq Vishu</h3>
              <p className="mainText">
                A young and passionate 18-year-old programming enthusiast who
                founded Vibroxa Studio with a vision to revolutionize the
                digital landscape.
                <br /> <br />
                Despite his young age, Ashfaq has demonstrated exceptional
                skills in web development, app development, and digital
                marketing. His journey began with a simple curiosity about how
                websites work, which quickly evolved into a deep passion for
                programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
