import React from 'react'
import './header.css';
import CTA from './CTA'
import ME from '../../assets/Prakash2.png';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
        <header className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Prakash Mishra</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
            <HeaderSocial/>
           
            <div className="me">
              <img src={ME} alt="me" className="me"/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            
        </header>    
  )
}

export default Header
