import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import email from "../assets/img/email.png";
import call from "../assets/img/call.png";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link>
          <Navbar.Brand to="/" className="Nav-logo">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="Navbar-section">
              <span className="email">
                <img src={email} alt="email" className="email-logo" />
                <span className="email-text">PMS@esteeadvisors.com</span>
              </span>
              <span>
                <Button className="navbar-btn">
                  <img src={call} alt="call" />
                  <span className="btn-text">+91-8700913486</span>
                </Button>
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
