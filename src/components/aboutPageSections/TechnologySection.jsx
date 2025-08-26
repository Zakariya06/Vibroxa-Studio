import React from "react";
import SectionHeader from "../SectionHeader";
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaHtml5,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { CiMobile2 } from "react-icons/ci";
import { SiFirebase, SiJavascript } from "react-icons/si";

const webDev = [
  {
    tech: "HTML5",
    icons: (
      <FaHtml5
        className="techIcon"
        color="#f97316
"
      />
    ),
  },
  {
    tech: "CSS3",
    icons: <IoLogoCss3 className="techIcon" color="#3b82f6" />,
  },
  {
    tech: "JavaScript",
    icons: (
      <SiJavascript
        className="techIcon"
        color="#eab308
"
      />
    ),
  },
  {
    tech: "React.js",
    icons: <FaReact className="techIcon" color="#60a5fa" />,
  },
  {
    tech: "Node.js",
    icons: <DiNodejs className="techIcon" color="#22c55e" />,
  },
  {
    tech: "Python",
    icons: <FaPython className="techIcon" color="#3b82f6" />,
  },
];

const mobileDev = [
  {
    tech: "Flutter",
    dec: "Cross-platform",
    icons: <CiMobile2 className="techIcon" color="#3b82f6" />,
  },
  {
    tech: "React Native",
    dec: "iOS & Android",
    icons: <FaReact className="techIcon" color="#60a5fa" />,
  },
  {
    tech: "Dart",
    dec: "Flutter Development",
    icons: <FaCode className="techIcon" color="#06b6d4" />,
  },
  {
    tech: "JavaScript",
    dec: "React Native",
    icons: <SiJavascript className="techIcon" color="#eab308" />,
  },
];

const dataBases = [
  {
    tech: "MongoDB",
    dec: "NoSQL Database",
    icons: <FaDatabase className="techIcon" color="#22c55e" />,
  },
  {
    tech: "Firebase",
    dec: "Real-time Database",
    icons: <SiFirebase className="techIcon" color="#f97316" />,
  },
  {
    tech: "AWS",
    dec: "Cloud Services",
    icons: <FaAws className="techIcon" color="#eab308" />,
  },
  {
    tech: "MySQL",
    dec: "SQL Database",
    icons: <FaServer className="techIcon" color="#3b82f6" />,
  },
];

const TechnologySection = () => {
  return (
    <section className="TechnologySection constantSpacing">
      <div className="container">
        <SectionHeader title="Our Technology Stack" />

        <h1 className="mdHeading mb-3">Web Development</h1>
        <div className="row  row-gap-4">
          {webDev.map((tech) => (
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="serviceCard techCard">
                {tech.icons}
                <h5 className="mdHeading mt-3">{tech.tech}</h5>
              </div>
            </div>
          ))}
        </div>

        <h1 className="mdHeading mb-3 mt-5">Mobile Development</h1>
        <div className="row  row-gap-4">
          {mobileDev.map((tech) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div className="serviceCard techCard">
                {tech.icons}
                <h5 className="mdHeading mt-3">{tech.tech}</h5>
                <p className="mainText mt-1">{tech.dec}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="mdHeading mb-3 mt-5">Database & Cloud Solutions</h1>
        <div className="row  row-gap-4">
          {dataBases.map((tech) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div className="serviceCard techCard">
                {tech.icons}
                <h5 className="mdHeading mt-3">{tech.tech}</h5>
                <p className="mainText mt-1">{tech.dec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
