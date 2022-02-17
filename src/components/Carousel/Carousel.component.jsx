import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.styles.css';

function Carousel({ renderSlidesFunct }) {

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        className="my-swiper"
      >
        {
          renderSlidesFunct.map((content, index) => (
            <SwiperSlide key={`slide_${index}`} >
              {content}
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default Carousel;
