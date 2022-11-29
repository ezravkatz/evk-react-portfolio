import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typist from "react-typist";
import logo from "../../assets/longlogolight.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header2() {
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
                  <h2>Hello, my name is </h2>
                </span>
                <Typist.Delay ms={500} />
                <div className="name__container">
                  <h1> Ezra Katz </h1>
                </div>
                <Typist.Delay ms={500} />
                <h2>Front-End Developer</h2>
                <Typist.Backspace count={19} delay={500} />
                <Typist.Delay ms={500} />
                <h2>UI/UX Designer</h2>
                <Typist.Backspace count={14} delay={500} />
                <Typist.Delay ms={500} />
                <h2>Web Developer</h2>
                <Typist.Backspace count={13} delay={500} />
                <Typist.Delay ms={500} />
                <h2>Copywriter</h2>
                <Typist.Backspace count={10} delay={500} />
                <Typist.Delay ms={500} />
                <h2>Content Creator</h2>
                <Typist.Backspace count={15} delay={500} />
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

export default Header2;
