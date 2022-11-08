import './footer.css'

import React from 'react'
import {MdOutlineFacebook} from 'react-icons/md'
import {TfiTwitter} from 'react-icons/tfi'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EZRA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/violetkatz"><MdOutlineFacebook /></a>
        <a href="https://instagram.com/"><BsInstagram /></a>
        <a href="https://twitter.com"><TfiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EVK. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
