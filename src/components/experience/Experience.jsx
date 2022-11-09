import './experience.css'

import React from 'react'
import {RiHtml5Line} from 'react-icons/ri'
import {RiCss3Line} from 'react-icons/ri'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {GrNode} from 'react-icons/gr'
import {SiExpress} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Development Skillset</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <RiHtml5Line classname='experience__details-icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiCss3Line classname='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript classname='experience__details-icon'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <FaReact classname='experience__details-icon'/>
              <div><h4>React</h4>
              <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <FaBootstrap classname='experience__details-icon'/>
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GrMysql classname='experience__details-icon'/>
              <div><h4>MySQL</h4>
              <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <GrNode classname='experience__details-icon'/>
             <div> <h4>Node.js</h4>
              <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <SiExpress classname='experience__details-icon'/>
              <div><h4>Express.js</h4>
              <small className='text-light'>Basic</small></div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
