import React from 'react'
import './services.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
        <div className="service__head">
        <h3>UI/UX Design</h3></div>
        <ul className='service__list'>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        </ul>
        </article>

{/* END OF UI/UX SECTION */}

        <article className="service">
        <div className="service__head">
        <h3>Web Development</h3></div>
        <ul className='service__list'>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        </ul>
        </article>

{/* END OF WEB DEVELOPMENT SECTION */}


        <article className="service">
        <div className="service__head">
        <h3>Content Creation</h3></div>
        <ul className='service__list'>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li>
          <HiBadgeCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        </ul>
        </article>

{/* END OF CONTENT CREATION SECTION */}

      </div>
    </section>
  )
}

export default Services
