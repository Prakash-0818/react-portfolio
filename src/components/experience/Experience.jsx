import React from 'react'
import './experience.css';
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiJquery} from 'react-icons/si'
import {SiJava} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <SiHtml5 className='experience__details-icons'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <SiCss3 className='experience__details-icons'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <SiJavascript className='experience__details-icons'/>
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <SiReact className='experience__details-icons'/>
                    <div>
                      <h4>REACT</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
            </article>
            <article className='experience__details'>
                <BsFillBootstrapFill className='experience__details-icons'/>
                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className='text-light'>Experienced</small>  
                </div>    
            </article>
            <article className='experience__details'>
                <SiJquery className='experience__details-icons'/>
                <div>
                  <h4>JQUERY</h4>
                  <small className='text-light'>Experienced</small> 
                </div>
            </article>
          </div>
        </div>

           {/**********end of frontend *************/}
       
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <SiJava className='experience__details-icons'/>
                <div>
                  <h4>JAVA</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <SiCplusplus className='experience__details-icons'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <DiNodejs className='experience__details-icons'/>
                <div>
                  <h4>NODEJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <SiMysql className='experience__details-icons'/>
                <div>
                  <h4>MYSQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>

            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience
