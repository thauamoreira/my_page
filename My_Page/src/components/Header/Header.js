import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container className="d-flex align-items-center justify-content-center">
        <Link className="link" to="/">
        <img src="https://firebasestorage.googleapis.com/v0/b/thauamoreira-7d658.appspot.com/o/logo.png?alt=media&token=64270f35-a1ea-4f53-9083-6c5ae0e3089d" 
        alt="Logo do TR"
        style={{ maxHeight: "70vh" }} 
        className="text-center" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/" className="link">
              Features
            </Link>
            <Link className="link" eventKey={2} to="/">
              About us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}