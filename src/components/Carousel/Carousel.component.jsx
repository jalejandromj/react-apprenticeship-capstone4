import React from 'react';
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { capitalizeFirstLetter } from '../../utils/utils.js';
import Col from "../../components/Col";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import './Carousel.styles.css';

function Carousel(props) {
  let navigate = useNavigate();
  
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
                  <MediaCard description={`[${capitalizeFirstLetter(item.data.category.slug)}] $${item.data.price}`}
                             headerSize="small"
                             media={item.data.mainimage.url}
                             onClick={() => navigate(`/product/${item.id}`)}
                             showButton="Add to cart"
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
