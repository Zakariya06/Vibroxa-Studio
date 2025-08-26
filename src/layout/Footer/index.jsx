import logo from "@/assets/brandLogo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PAGE_ROUTE } from "../../router/routes";
import { HashLink } from "react-router-hash-link";

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
          <div className="col-md-2 col-lg-3">
            <div className="footerMenu">
              <h5 className="mdHeading">Services</h5>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/WebDevelopment`}
                className="footerLink"
              >
                Web Development
              </Link>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/AppDevelopment`}
                className="footerLink"
              >
                App Development
              </Link>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/GraphicDesign`}
                className="footerLink"
              >
                Graphic Design
              </Link>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/VideoEditing`}
                className="footerLink"
              >
                Video Editing
              </Link>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/DigitalMarketing`}
                className="footerLink"
              >
                Digital Marketing
              </Link>
              <Link
                to={`${PAGE_ROUTE.SERVICES}/BusinessDevelopment`}
                className="footerLink"
              >
                Business Development
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-md-3 col-lg-3">
            <div className="footerMenu">
              <h5 className="mdHeading">Company</h5>

              <Link to={PAGE_ROUTE.ABOUT_US} className="footerLink">
                About Us
              </Link>
              <HashLink to="/#Portfolio" className="footerLink">
                Portfolio
              </HashLink>
              <HashLink to={"/#Testimonials"} className="footerLink">
                Testimonials
              </HashLink>
              <HashLink to={"/#contact"} className="footerLink">
                Careers
              </HashLink>
              <Link to={PAGE_ROUTE.BLOG} className="footerLink">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3">
            <div className="footerMenu">
              <h5 className="mdHeading">Contact</h5>

              <a
                href="https://maps.google.com/?q=Lahore,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink"
              >
                <MapPin className="footerIcon" />
                Lahore, Pakistan
              </a>

              <a href="mailto:vibroxastudio@gmail.com" className="footerLink">
                <Mail className="footerIcon" /> vibroxastudio@gmail.com
              </a>

              <a href="tel:+923492374801" className="footerLink">
                <Phone className="footerIcon" /> +92 349 2374801
              </a>
            </div>
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
