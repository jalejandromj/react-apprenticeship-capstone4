import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Col from "../../components/Col";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import './Carousel.styles.css';

function Carousel(props) {
  console.log(props);
  /*const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );*/
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        className="my-swiper"
      >
        {
          props.items.map((item, index) => (
              <SwiperSlide key={`slide_${index}`} virtualIndex={index}>
                <Row>
                  <Col md={12}>
                  <MediaCard
                            description={`$${item.data.price}`}
                            headerSize="small"
                            media={item.data.mainimage.url}
                            title={item.data.name} />
                  </Col>
                </Row>
              </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default Carousel;
