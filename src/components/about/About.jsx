import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h3> Get to Know</h3>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Get to know me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Bachelor of Arts</h5>
              <small>Earned at New College of Florida in Liberal Arts.</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Further Education</h5>
              <small>
                Certificate in Full Stack Development from Univeristy of Miami
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Availability</h5>
              <small>Freelance, part-time, or full-time work.</small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed.</small>
            </article> */}
          </div>
          <div className="about__bio">
            <p className="text__blur">
              {" "}
              Front-End Web Developer leveraging a diverse skillset to harness
              creativity through programming. Earned a certificate in full stack
              development from the University of Miami. Known for being an
              enthusiastic team player with a focus on problem-solving. Fluent
              in Spanish with working proficiency in French and Hebrew.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
