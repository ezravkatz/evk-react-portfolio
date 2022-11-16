import React from "react";
import "./header.css";
import CTA from "./CTA";
import LOGO from "../../assets/logodark5.png";
import HeaderSocials from "./HeaderSocials";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Typist from "react-typist";

const Header = () => {
  return (
    <header className="header" id="home">
      <Container>
        <div className="container header__container">
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
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
              </Typist>
              <CTA />
              <HeaderSocials />
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="me">
                <img src={LOGO} alt="Ezra Katz Header logo" />
              </div>

              {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default Header;
