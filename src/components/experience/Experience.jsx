import "./experience.css";

import React from "react";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Development Skillset</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiHtml5Line className="experience__details-icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCss3Line className="experience__details-icon" />
              <div>
                <h5>CSS</h5>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h5>React</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h5>Bootstrap</h5>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h5>MySQL</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GrNode className="experience__details-icon" />
              <div>
                {" "}
                <h5>Node.js</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h5>Express.js</h5>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
