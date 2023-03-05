import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import logo from "../../assets/logolight5.png";
import Greeting from "./Greeting";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="cta">
          <CTA />
        </div>
        <div className="greeting__container">
          <Greeting />
        </div>

        <div className="logo__container">
          <div className="logo">
            <img src={logo} alt="Ezra Katz Header logo" />
          </div>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header;
