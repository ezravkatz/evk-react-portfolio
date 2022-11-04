import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="Get to know me" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>Certificate in Full Stack Development from Univeristy of Miami</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Availability</h5>
              <small>Freelance, part-time, or full-time work.</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed.</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis, voluptate quisquam tenetur magnam libero? Praesentium inventore iusto, enim cumque nobis molestiae quis. Possimus molestias asperiores dolorem! Veniam, quia quae.
    
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          </div>

    </section>

  )
}

export default About
