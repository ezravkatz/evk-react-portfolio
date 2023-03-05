import React from "react";
import CV from "../../assets/evk-cv-january-2023.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta__container">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact
        </a>
      </div>
    </div>
  );
};

export default CTA;
