import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="py-3">
          <Navbar.Brand>
            <span className="main-color-bg text-white rounded-circle p-3 ms-2">
              {" "}
              PZ
            </span>
            <span className="text-dark fs-5 fw-bolder"> Perfume House</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <button
                  style={{ width: "140px", height: "61px" }}
                  className=" login main1-color-bg border-0 rounded-2 "
                >
                  <Link to={"/login"} className="text-decoration-none login">
                    Login
                  </Link>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  style={{ width: "140px", height: "61px" }}
                  className=" main-color-bg border-0 rounded-2 text-white"
                >
                  <Link
                    to={"/register"}
                    className="text-decoration-none signup"
                  >
                    Sign up
                  </Link>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
