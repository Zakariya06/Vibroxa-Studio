import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "@/assets/brandLogo.png";
import { PAGE_ROUTE } from "../../router/routes";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Navbar expand="lg" className="customHeader">
      <Container>
        <Navbar.Brand className="flexDiv" href="/">
          <img src={logo} alt="vibrox Studio" className="brandLogoImage" />
          <h1 className="logoHeading">Vibroxa Studio</h1>
        </Navbar.Brand>

        <div className="flexDiv ">
          <button
            className="toggleTheme d-lg-none d-flex"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="toggleIcon" />
            ) : (
              <Moon className="toggleIcon" />
            )}
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={NavLink} to={PAGE_ROUTE.HOME}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={PAGE_ROUTE.ABOUT_US}>
              About us
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              onClick={() => setShow((prev) => !prev)}
            >
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/WebDevelopment`}
              >
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/AppDevelopment`}
              >
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/GraphicDesign`}
              >
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/VideoEditing`}
              >
                Video Editing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/DigitalMarketing`}
              >
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`${PAGE_ROUTE.SERVICES}/BusinessDevelopment`}
              >
                Business Development
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={HashLink} to={"/#Portfolio"}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={HashLink} to={"/#Testimonials"}>
              Testimonials
            </Nav.Link>
            <Nav.Link as={HashLink} to={"/#contact"}>
              Contact
            </Nav.Link>
            <button
              className="toggleTheme d-lg-flex d-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="toggleIcon" />
              ) : (
                <Moon className="toggleIcon" />
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
