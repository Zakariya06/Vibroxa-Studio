import { CircleCheck } from "lucide-react";
import React from "react";

const ExpertiseSection = ({ expertise }) => {
  return (
    <section className="ExpertiseSection constantSpacing">
      <div className="container">
        <div className="row   row-gap-4">
          <div className="col-lg-6">
            <div className="sectionContent">
              <h1 className="mdHeading">{expertise?.title}</h1>
              <p className="mainText my-4">{expertise.dec}</p>
              <ul className="unorderList row-gap-2">
                {expertise.skills.map((list) => (
                  <li key={list} className=" listText mb-1 flexDiv p-0 m-0">
                    <CircleCheck fill="#22c55e" className="checkIcon" /> {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="GetInTouchHelpBox">
              <h1 className="mdHeading mb-3">{expertise.processTitle}</h1>
              {expertise.process.map((process, index) => (
                <div
                  key={process.name}
                  className="flexDiv mb-2 gap-3 align-items-start"
                >
                  <span style={{ fontSize: "16px", color: "#3b82f6" }}>
                    {index + 1}{" "}
                  </span>
                  <div className="processContent">
                    <h2 className="smHeading">{process.name}</h2>
                    <p className="mainText">{process.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
