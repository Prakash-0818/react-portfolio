import React from 'react'
import PRAKASH from '../../assets/Prakash.png';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PRAKASH} alt="Prakash.png" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
              </article>
              <article className='about__card'>
                  <HiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>2+ Worldwide</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nam ex minus facere tenetur libero! Illo doloremque 
              maxime sed quod tempore sit necessitatibus natus distinctio corrupti consectetur atque, unde ratione?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
