import React from 'react'
import './service.css'
import {BsCheck} from 'react-icons/bs';
const Service = () => {
  return (
  <section id="service">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container service__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </article>

      {/*end of UI/UX */}
      <article className="service">
        <div className="service__head">
          <h3>Web development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </article>

      {/**end of web development */}
      <article className="service">
        <div className="service__head">
          <h3>Backend development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </article>

    </div>
  </section>
  )
}

export default Service