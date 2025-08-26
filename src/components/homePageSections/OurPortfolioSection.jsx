import SectionHeader from "../SectionHeader";
import image1 from "@/assets/portfolio_card_1.avif";
import image2 from "@/assets/portfolio_card_2.avif";
import image3 from "@/assets/portfolio_card_3.avif";
import Button from "../Button";

const PortfolioData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with React frontend and Node.js backend",
    skills: ["React", "Node.js", "MongoDB"],
    image: image1,
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Cross-platform mobile application built with Flutter",
    skills: ["Flutter", "Firebase", "Dart"],

    image: image2,
  },
  {
    id: 3,
    title: "Brand Identity Package",
    description:
      "Complete branding solution including logo, business cards, and style guide",
    skills: ["Logo Design", "Branding", "Print Design"],
    image: image3,
  },
];

const OurPortfolioSection = () => {
  return (
    <section className="OurPortfolioSection constantSpacing" id="Portfolio">
      <div className="container">
        <SectionHeader
          title="Our Portfolio"
          subtitle="A showcase of our recent projects and client work"
        />
        <div className="row  row-gap-4">
          {PortfolioData.map((service) => (
            <div key={service.title} className="col-lg-4">
              <div className="serviceCard portfolioCard">
                <img
                  src={service.image}
                  alt={service.title}
                  className="cardImage"
                />
                <div className="cardBody p-lg-4 p-3">
                  <h3 className="mdHeading">{service.title}</h3>
                  <p className="mainText">{service.description}</p>

                  <div className="flexDiv mt-4">
                    {service.skills.map((skill) => (
                      <button className="skillButton" key={skill}>
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flexDiv justify-content-center mt-4">
          <Button value="View All Projects" className="outlineButton" />
        </div>
      </div>
    </section>
  );
};

export default OurPortfolioSection;
