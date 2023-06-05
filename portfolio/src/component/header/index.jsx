import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand className="d-flex gap-2">
          <Nav.Link
            href="https://github.com/bushrakalaji"
            className="text-white"
          >
            <i class="bi bi-github"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/bushra-kalaji-343b8b206"
            className=" text-white"
          >
            <i class="bi bi-linkedin"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.tiktok.com/@bushrakalaji"
            className=" text-white"
          >
            <i class="bi bi-tiktok"></i>
          </Nav.Link>
          <Nav.Link
            href="https://instagram.com/bushra_kalaji?igshid=OGQ5ZDc2ODk2ZA=="
            className=" text-white"
          >
            <i class="bi bi-instagram"></i>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  ">
            <Nav.Link href="#projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="#about" className=" text-white">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className=" text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
