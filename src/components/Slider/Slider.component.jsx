import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.styles.css';

function Slider(props) {

  return (
    <Carousel controls={false} indicators={false} interval={2000} pause={false}>
      {
        props.items.map((item, index) => {

          return(
            <Carousel.Item key={`${item.data.name}_${index}`}>
              <img
                className="d-block w-100"
                style={{height: "100%"}}
                src={item.data.main_image.url}
                alt={item.data.main_image.alt}
              />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default Slider;
