import React from "react";
import aboutSectionImage from "@/assets/about_Vibroxa_Section.avif";
import { CircleCheck } from "lucide-react";
import SectionHeader from "../SectionHeader";

const AboutVibroxaSection = () => {
  return (
    <section className="AboutVibroxaSection constantSpacing">
      <div className="container">
        <SectionHeader
          title="About Vibroxa Studio
"
        />
        <div className="row align-items-center row-gap-4">
          <div className="col-lg-6">
            <div className="heroImageContainer">
              <img
                src={aboutSectionImage}
                alt="image"
                className="heroSectionImage"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sectionContent">
              <h1 className="mdHeading">Who We Are</h1>
              <p className="mainText my-4">
                Vibroxa Studio is a premier freelancing agency based in Lahore,
                Pakistan, serving clients worldwide. We specialize in delivering
                comprehensive digital solutions tailored to your business needs.
                <br />
                <br />
                Our team of experts combines technical expertise with creative
                vision to help startups and established businesses grow their
                online presence and achieve their digital goals.
              </p>
              <ul className="row unorderList row-gap-2">
                {[
                  "Experienced Team",
                  "Quality Assurance",
                  "Client-Centric",
                  "Innovative Solutions",
                ].map((list) => (
                  <li key={list} className="col-sm-6 listText flexDiv p-0 m-0">
                    <CircleCheck fill="#22c55e" color="#000" /> {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVibroxaSection;
