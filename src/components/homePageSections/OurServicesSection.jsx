import React from "react";
import SectionHeader from "../SectionHeader";
import {
  Brush,
  ChartLine,
  CodeXml,
  Megaphone,
  Smartphone,
  Video,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Full-stack web development using MERN stack (MongoDB, Express, React, Node.js) to create responsive, scalable, and high-performance websites.",
    icon: <CodeXml size={40} color="#3b82f6" />,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Cross-platform mobile app development using Flutter and React Native to create beautiful, high-performance applications for iOS and Android.",
    icon: <Smartphone size={40} color="#a855f7" />,
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creative graphic design services including logos, branding, marketing materials, and UI/UX design to make your brand stand out.",
    icon: <Brush size={40} color="#ef4444" />,
  },
  {
    id: 4,
    title: "Video Editing",
    description:
      "Professional video editing services for YouTube, social media, commercials, and corporate videos to engage your audience.",
    icon: <Video size={40} color="#eab308" />,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, social media marketing, PPC, and content marketing to grow your online presence.",
    icon: <Megaphone size={40} color="#22c55e" />,
  },
  {
    id: 6,
    title: "Business Development",
    description:
      "Strategic consulting and business development services to help startups and businesses grow and scale in the digital landscape.",
    icon: <ChartLine size={40} color="#6366f1" />,
  },
];

const OurServicesSection = () => {
  return (
    <section className="OurServicesSection constantSpacing">
      <div className="container">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs"
        />
        <div className="row  row-gap-4">
          {servicesData.map((service) => (
            <div key={service.title} className="col-lg-4">
              <div className="serviceCard">
                <span className=" ">{service.icon}</span>
                <h3 className="mdHeading mt-3">{service.title}</h3>
                <p className="mainText">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
