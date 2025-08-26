import React from "react";
import SectionHeader from "../SectionHeader";

const developmentData = [
  {
    title: "Planning",
    dec: "We develop comprehensive strategies tailored to your business goals and market requirements.",
  },
  {
    title: "Design",
    dec: "UI/UX design and architecture planning ",
  },
  {
    title: "Development",
    dec: "Agile development with regular updates",
  },
  {
    title: "Deployment",
    dec: "Testing, deployment and maintenance",
  },
];

const DevelopmentSection = () => {
  return (
    <section className="DevelopmentSection constantSpacing">
      <div className="container">
        <SectionHeader title="Our Development Process" />
        <div className="row  row-gap-4">
          {developmentData.map((tech, index) => (
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="serviceCard  developmentCard ">
                <div className="numberCircle">{index + 1}</div>
                <h5 className="mdHeading mt-3 mb-1">{tech.title}</h5>
                <p className="mainText">{tech.dec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
