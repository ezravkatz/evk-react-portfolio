import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar1.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR,
    name: 'Amina Kabiri',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae quam laboriosam repellendus aliquam, alias expedita error deserunt enim maiores neque inventore omnis reprehenderit natus consequuntur maxime voluptatibus ab velit.'
  },
  {
    avatar: AVTR,
    name: 'Momtaz Ali',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae quam laboriosam repellendus aliquam, alias expedita error deserunt enim maiores neque inventore omnis reprehenderit natus consequuntur maxime voluptatibus ab velit.'
  },
  {
    avatar: AVTR,
    name: 'Maryam Bengali',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae quam laboriosam repellendus aliquam, alias expedita error deserunt enim maiores neque inventore omnis reprehenderit natus consequuntur maxime voluptatibus ab velit.'
  },
  {
    avatar: AVTR,
    name: 'Khadija Jones',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae quam laboriosam repellendus aliquam, alias expedita error deserunt enim maiores neque inventore omnis reprehenderit natus consequuntur maxime voluptatibus ab velit.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      //swiper modules
        modules={[Pagination]} spaceBetween={400}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
          <img src={avatar} alt="Client Avatar" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
