import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import logo from "../../assets/logolight5.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Greeting from "./Greeting";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col lg={6} md="auto" xs="auto">
            <CTA />
          </Col>
          <Col lg={3} md="auto" xs="auto">
            <Greeting />
          </Col>
          <Col lg={3} md="auto" xs="auto">
            <div className="logo">
              <img src={logo} alt="Ezra Katz Header logo" />
            </div>
            <HeaderSocials />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
