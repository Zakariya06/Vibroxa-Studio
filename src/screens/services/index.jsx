import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import { services } from "./servicesData";
import ExpertiseSection from "../../components/servicesPageSections/ExpertiseSection";

const Services = () => {
  const params = useParams();
  const service = services.filter((service) => service.id === params.id);

 

  return (
    <>
      <HeroSection
        title={service[0].heroSection.title}
        dec={service[0].heroSection.dec}
        buttonLabel={service[0].heroSection.buttonLabel}
        heroImage={service[0].heroSection.heroImage}
      />
      <ExpertiseSection expertise={service[0].expertise} />
    </>
  );
};

export default Services;
