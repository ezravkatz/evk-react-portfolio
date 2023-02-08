import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typist from "react-typist";
import logo from "../../assets/logolight5.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col lg={6} md="auto" xs="auto">
            <CTA />
          </Col>
          <Col lg={3} md="auto" xs="auto">
            <div className="container header__container">
              <Typist>
                <span className="first__sentence">
                  <h3>Hello, my name is </h3>
                </span>
                <Typist.Delay ms={500} />
                <div className="name__container">
                  <h1> Ezra Katz </h1>
                </div>
                <Typist.Delay ms={500} />
                <h3>Front-End Developer</h3>
                <Typist.Backspace count={19} delay={500} />
                <Typist.Delay ms={500} />
                <h3>UI/UX Designer</h3>
                <Typist.Backspace count={14} delay={500} />
                <Typist.Delay ms={500} />
                <h3>Web Developer</h3>
                <Typist.Backspace count={13} delay={500} />
                <Typist.Delay ms={500} />
                <h3>Copywriter</h3>
                <Typist.Backspace count={10} delay={500} />
                <Typist.Delay ms={500} />
                <h3>Front-End Developer</h3>
              </Typist>{" "}
            </div>
          </Col>
          <Col lg={3} md="auto" xs="auto">
            <div className="logo">
              <img src={logo} alt="Ezra Katz Header logo" />
            </div>{" "}
            <HeaderSocials />{" "}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;


import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import logo from "../../assets/logolight5.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col lg={6} md="auto" xs="auto">
            <CTA />
          </Col>
          <Col lg={3} md="auto" xs="auto">
            <div className="container header__container">
              <h3>Hello, my name is </h3>

              <div className="name__container">
                <h1> Ezra Katz </h1>
              </div>
              <h3>Front-End Developer</h3>
            </div>
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
