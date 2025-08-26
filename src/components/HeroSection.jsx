import React from "react";
import Button from "./Button";

const HeroSection = ({
  title = "",
  dec = "",
  workButton = false,
  buttonLabel = "Get Started",
  heroImage = "",
}) => {
  return (
    <section className="HeroSection constantSpacing">
      <div className="container">
        <div className="row align-items-center row-gap-5">
          <div className="col-lg-6">
            <div className="heroContent">
              {title && <h1 className="lgHeading">{title}</h1>}

              {dec && <p className="mainText my-4">{dec}</p>}

              <div className="flexDiv">
                <Button value={buttonLabel} />
                {workButton && (
                  <Button value="View Work" className="outlineButton" />
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="heroImageContainer p-lg-5 p-0">
              <img src={heroImage} alt="image" className="heroSectionImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
