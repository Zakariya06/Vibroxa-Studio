import React from "react";
import SectionHeader from "../SectionHeader";
import {
  Clock,
  Clock10,
  Clock5,
  Info,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const GetInTouchSection = () => {
  return (
    <section className="GetInTouchSection constantSpacing" id="contact">
      <div className="container">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to start your project? Contact us today"
        />
        <div className="row align-items-center row-gap-4">
          <div className="col-lg-6">
            <div className="contactInfoContent">
              <h5 className="mdHeading mb-4">Contact Information</h5>
              <div className="contactInfo flexDiv align-items-start">
                <MapPin className="contactInfoIcon" />
                <div>
                  <h4 className="smHeading">Location</h4>
                  <p className="mainText">
                    Lahore, Pakistan <br />
                    Remote Worldwide
                  </p>
                </div>
              </div>

              <div className="contactInfo flexDiv align-items-start my-4">
                <Mail className="contactInfoIcon" />
                <div>
                  <h4 className="smHeading">Email</h4>
                  <p className="mainText">vibroxastudio@gmail.com</p>
                </div>
              </div>
              <div className="contactInfo flexDiv align-items-start  ">
                <Phone className="contactInfoIcon" />
                <div>
                  <h4 className="smHeading">Phone</h4>
                  <p className="mainText">+92 3492374801</p>
                </div>
              </div>

              <div className="contactInfo flexDiv align-items-start  my-4  ">
                <Clock5 className="contactInfoIcon" />
                <div>
                  <h4 className="smHeading">Working Hours</h4>
                  <p className="mainText">
                    Monday - Friday: 9am - 6pm <br />
                    Saturday: 10am - 2pm
                  </p>
                </div>
              </div>

              <div className="">
                <h4 className="smHeading mb-2">Follow Us</h4>
                <div className="flexDiv gap-3">
                  <a href="#" className="socialLink">
                    <FaFacebook />
                  </a>
                  <a href="#" className="socialLink">
                    <FaTwitter />
                  </a>
                  <a href="#" className="socialLink">
                    <FaInstagram />
                  </a>
                  <a href="#" className="socialLink">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="socialLink">
                    <FaBehance />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="GetInTouchHelpBox">
              <h1 className="mdHeading">How Can We Help?</h1>
              <p className="mainText my-4">
                Have a project in mind or want to discuss how we can help your
                business grow? Reach out to us directly using the contact
                information provided, and our team will get back to you as soon
                as possible.
              </p>

              <div className="contactAlert flexDiv">
                <Info className="InfoIcon" />
                <p className="mainText">
                  For fastest response, please contact us via WhatsApp at +92
                  3492374801 or email at vibroxastudio@gmail.com
                </p>
              </div>

              <div className="mt-4">
                <h5 className="smHeading mb-2">Our Expertise</h5>

                <div className="flexDiv" style={{ flexWrap: "wrap" }}>
                  {[
                    "Web Development",
                    "App Development",
                    "Graphic Design",
                    "Video Editing",
                    "Digital Marketing",
                    "Business Growth",
                  ].map((skill) => (
                    <button className="skillButton" key={skill}>
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
