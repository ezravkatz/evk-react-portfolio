import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "RPS: Real Punk Smackdown React Game",
    github: "https://github.com/ezravkatz/rps-real-punk-smackdown",
    demo: "https://aesthetic-strudel-ad3f80.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "TipCalc: React + Vite Tip Calculator",
    github: "https://github.com/ezravkatz/tip-calculator",
    demo: "https://heartfelt-sawine-579cf1.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tic Tac Toe",
    github: "https://github.com/ezravkatz/tictactoe",
    demo: "https://lively-fudge-0231b6.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
