import React from "react";
import "./services.css";
import { HiBadgeCheck } from "react-icons/hi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Wireframes to demonstrate user flow.</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Figma, Sketch, and Photoshop.</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>User research and usability testing</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Information architecture</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Organize and structure content.</p>
            </li>
            {/* <li>
              <HiBadgeCheck className="service__list-icon" />
              <p></p>
            </li> */}
          </ul>
        </article>

        {/* END OF UI/UX SECTION */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Create agile websites</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Develop animations and interactivity</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Build reusable code for future use</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Ensure websites are ADA compliant</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Testing and debugging code</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT SECTION */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Copywriter with 6+ years experience</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Experienced in SEO</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Develop and expand your brand</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Streamline content marketing efforts</p>
            </li>
            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Ideation, planning, and creation</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION SECTION */}
      </div>
    </section>
  );
};

export default Services;
