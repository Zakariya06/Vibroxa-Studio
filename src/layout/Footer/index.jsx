import logo from "@/assets/brandLogo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerSection constantSpacing">
      <div className="container ">
        <div className="row row-gap-3 ">
          {/* Company Section */}
          <div className="col-md-3 col-lg-3  ">
            <div className="footerBrandInfoContainer">
              <div className="flexDiv" href="/">
                <img
                  src={logo}
                  alt="vibrox Studio"
                  className="brandLogoImage"
                />
                <h1 className="logoHeading">Vibroxa Studio</h1>
              </div>
              <p className="mainText my-3">
                Your trusted partner for comprehensive digital solutions and
                business growth strategies.
              </p>
              <div className="">
                <a href="#" className="footerSocialLink ">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-md-2 col-lg-3   ">
            <div className="footerMenu">
              <h5 className="mdHeading">Services</h5>
              <a href="#" className="footerLink">
                Web Development
              </a>
              <a href="#" className="footerLink">
                App Development
              </a>
              <a href="#" className="footerLink">
                Graphic Design
              </a>
              <a href="#" className="footerLink">
                Video Editing
              </a>
              <a href="#" className="footerLink">
                Digital Marketing
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-md-3 col-lg-3   ">
            <div className="footerMenu">
              <h5 className="mdHeading">Company</h5>
              <a href="#" className="footerLink">
                About Us
              </a>
              <a href="#" className="footerLink">
                Portfolio
              </a>
              <a href="#" className="footerLink">
                Testimonials
              </a>
              <a href="#" className="footerLink">
                Careers
              </a>
              <a href="#" className="footerLink">
                Blog
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3   ">
            <div className="footerMenu"></div>
            <h5 className="mdHeading">Contact</h5>
            <a href="#" className="footerLink">
              <MapPin className="footerIcon" />
              Lahore, Pakistan
            </a>
            <a href="#" className="footerLink">
              <Mail className="footerIcon" /> vibroxastudio@gmail.com
            </a>
            <a href="#" className="footerLink">
              <Phone className="footerIcon" /> +92 349 2374801
            </a>
          </div>
        </div>

        <div className="flexDiv  footerCopyWriteContent ">
          <p className="copyWriteText">
            &copy; {new Date().getFullYear()} Vibroxa Studio. All rights
            reserved.
          </p>
          <div className="flexDiv">
            <a href="#" className="footerLink m-0">
              Privacy Policy
            </a>
            <a href="#" className="footerLink m-0">
              Terms of Service
            </a>
            <a href="#" className="footerLink m-0">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
