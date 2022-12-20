import React from 'react'
import './footer.css';
import {SiHackerrank} from 'react-icons/si';
import {SiLinkedin} from 'react-icons/si';
import {SiLeetcode} from 'react-icons/si';
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
      </ul>
      <div className="footer__socials">
        <ul className='permalinks-socials'> 
            <li><a href="https://www.linkedin.com/in/prakash-mishra-94449b185/" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a></li>
            <li><a href="https://www.hackerrank.com/prakashmishra181" target="_blank" rel="noopener noreferrer"><SiHackerrank/></a></li>
            <li><a href="https://leetcode.com/Prakash0818/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a></li>
        </ul>
      </div>
      <div className="footer__copyright">
        <small>&copy; My Portfolio</small>
      </div>
    </footer>
  )
}

export default Footer
