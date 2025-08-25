import React from "react";
import SectionHeader from "../SectionHeader";
import { Star } from "lucide-react";
import avatar_1 from "@/assets/client_avatar_1.jpg";
import avatar_2 from "@/assets/client_avatar_2.jpg";
import avatar_3 from "@/assets/client_avatar_3.jpg";

const clientData = [
  {
    id: 1,
    description:
      "Vibroxa Studio transformed our online presence completely. Their web development team delivered a stunning e-commerce platform that has significantly increased our sales.",
    image: avatar_1,
    name: "Ahmed Khan",
    company: "CEO, FashionHub",
  },
  {
    id: 1,
    description:
      "The mobile app developed by Vibroxa Studio exceeded our expectations. Their attention to detail and user experience design is exceptional.",
    image: avatar_2,
    name: "Fatima Ali",
    company: "Founder, HealthTrack",
  },
  {
    id: 1,
    description:
      "Their digital marketing strategies helped us triple our online leads within 3 months. Highly recommended for anyone looking to grow their business online.",
    image: avatar_3,
    name: "Usman Malik",
    company: "Marketing Director, TechSolutions",
  },
];

const ClientSection = () => {
  return (
    <section className="ClientSection constantSpacing">
      <div className="container">
        <SectionHeader
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
        />
        <div className="row  row-gap-4">
          {clientData.map((client) => (
            <div key={client.name} className="col-lg-4">
              <div className="serviceCard  clientCard">
                <div className="flexDiv gap-1">
                  {[...Array(4)].map((_, index) => (
                    <Star
                      fill="#facc15"
                      color="transparent"
                      size={30}
                      key={index}
                    />
                  ))}
                </div>

                <p className="mainText my-3">"{client.description}"</p>

                <div className="flexDiv">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="clientAvatar"
                  />
                  <div className="clientDetails">
                    <h5 className="mdHeading">{client.name}</h5>
                    <p className="mainText">{client.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
