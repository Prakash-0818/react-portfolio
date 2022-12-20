import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/AVTR1.jpg';
import AVTR2 from '../../assets/AVTR2.jpg';
import AVTR3 from '../../assets/AVTR3.jpg';
import AVTR4 from '../../assets/AVTR4.jpg';


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Benjamin gatus',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima voluptate labore magnam iste soluta voluptatibus nisi quia reiciendis cumque'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Gabrial raskin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima voluptate labore magnam iste soluta voluptatibus nisi quia reiciendis cumque'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Tia simmons',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima voluptate labore magnam iste soluta voluptatibus nisi quia reiciendis cumque'
  },
  {
    id: 4,
    image: AVTR4,
    name: 'christian rodrigues',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima voluptate labore magnam iste soluta voluptatibus nisi quia reiciendis cumque'
  },

]

const Testimonials = () => {
  return (
   <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
    
    modules={[Pagination, Navigation]}
    navigation
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        data.map(({id, image, name, review})=> {
          return (
            <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <div className="client__name">
                  {name}
              </div>
              <client className="review">
                  {review}
              </client>
          </SwiperSlide>
          )
        })
      }
      
    </Swiper>
   </section>
  )
}

export default Testimonials