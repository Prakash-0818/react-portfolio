import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg.jpg';
import IMG2 from '../../assets/portfolio2.jpg.jpg';
import IMG3 from '../../assets/portfolio3.jpg.jpg';
import IMG4 from '../../assets/portfolio4.jpg.jpg';
import IMG5 from '../../assets/portfolio5.jpg.jpg';
import IMG6 from '../../assets/portfolio6.jpg.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'E-commerce for Apple products'
  },
  {
    id:2,
    image: IMG2,
    title: 'E-commerce for all mobile phones'
  },
  {
    id:3,
    image: IMG3,
    title: 'E-commerce for Dell laptops'
  },
  {
    id:4,
    image: IMG4,
    title: 'crypto currency dashboard and financial'
  },
  {
    id:5,
    image: IMG5,
    title: 'project based on AI and data science'
  },
  {
    id:6,
    image: IMG6,
    title: 'Robotics and machine learning'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
     <div className="container portfolio__container">
     {
      data.map(({id, image, title}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://www.hackerrank.com/" className='btn btn-primary'>hackerrank</a>
          </article>
          )
      })
     }
     </div>
      
    </section>
  )
}

export default Portfolio
