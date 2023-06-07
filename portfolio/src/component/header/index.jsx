import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="md" className="sticky-top ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto glass px-3">
            <Nav.Link href="#projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="#about" className=" text-white">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className=" text-white">
              Contect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
