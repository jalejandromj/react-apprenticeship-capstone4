import React, { useEffect } from 'react';

import Carousel from '../../components/Carousel';
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import Slider from '../../components/Slider';
import { CategoriesContainer } from './Home.page.styles';
import featuredBanners  from '../../utils/featured-banners.json';
import featuredProducts  from '../../utils/featured-products.json';
import productCategories from '../../utils/product-categories.json';



function HomePage({conditionalRender}) {

  const RenderCategories = () => {
    const renderedCategories = productCategories.results.map((cat, index) => {
      let isMini = false;
      if(index > 0)
        isMini = true;

      return(
        <MediaCard key={`${cat.data.name}_${index}`}
                   description=""
                   media={cat.data.main_image.url} 
                   mini={isMini}
                   style={{gridArea: `panel${index}`}}
                   title={cat.data.name} />
      )
    })

    return renderedCategories;
  }

  useEffect(() => {

  }, []);

  return (
    <section className="content home-page">
      <section id="banner-section">
        <Slider items={featuredBanners.results}/>
      </section>
      <section id="products-section" style={{padding: "5% 2% 5% 2%"}}>
        <Row style={{height: "12%"}}>
          <Col md={4} style={{overflowX: "hidden"}}>
            <h2>Shop Our Favourites</h2>
          </Col>
          <Col md={4} style={{overflowX: "hidden"}} centerX>
            <a href="#" onClick={() => conditionalRender('productlist')}>
              <span style={{color: "rgb(var(--grayish-black))"}}>View all</span>
            </a>
          </Col>
        </Row>
        <Row style={{height: "88%"}}>
          <Col md={12} style={{width: "100%"}}>
            <Carousel items={featuredProducts.results}/>
          </Col>
        </Row>
      </section>
      <section id="categories-section" style={{padding: "3% 2% 3% 2%"}}>
        <Row style={{height: "12%"}}>
          <Col md={12}>
            <h2>Explore Categories</h2>
          </Col>
        </Row>
        <Row style={{height: "88%"}}>
          <CategoriesContainer>
            <RenderCategories />
          </CategoriesContainer>
        </Row>
      </section>
      <Footer />
    </section>
  );
}

export default HomePage;