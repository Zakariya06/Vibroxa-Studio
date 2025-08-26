import { GoGraph } from "react-icons/go";
import SectionHeader from "../SectionHeader";
import { PiUsersThreeFill } from "react-icons/pi";
import { GrCode } from "react-icons/gr";

const profession = [
  {
    tech: "Strategic Planning",
    dec: "We develop comprehensive strategies tailored to your business goals and market requirements.",
    icons: <GoGraph className="professionIcon" color="#3b82f6" />,
  },
  {
    tech: "Technical Excellence",
    dec: "Our team employs cutting-edge technologies and best practices to deliver robust solutions.",
    icons: <GrCode className="professionIcon" color="#3b82f6" />,
  },
  {
    tech: "Client-Focused",
    dec: "We prioritize client satisfaction and maintain clear communication throughout the project lifecycle.",
    icons: <PiUsersThreeFill className="professionIcon" color="#3b82f6" />,
  },
];

const ProfessionalSection = () => {
  return (
    <section className="TechnologySection constantSpacing">
      <div className="col-xxl-7 col-lg-8 col-md-9 col-11 mx-auto">
        <SectionHeader title="Our Professional Approach" />

        <div className="row  row-gap-4">
          {profession.map((pro) => (
            <div className="col-lg-4 col-md-6  col-12">
              <div className="serviceCard technologyCard">
                {pro.icons}
                <h5 className="mdHeading mt-4 mb-1">{pro.tech}</h5>
                <p className="mainText">{pro.dec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
