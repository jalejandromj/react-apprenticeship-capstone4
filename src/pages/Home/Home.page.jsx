import React, { useEffect } from 'react';

import styled from 'styled-components';

import Carousel from '../../components/Carousel';
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import Slider from '../../components/Slider';
import featuredBanners  from '../../utils/featured-banners.json';
import featuredProducts  from '../../utils/featured-products.json';
import productCategories from '../../utils/product-categories.json';

const HomeSection = styled.section`
  background-color: white;
  /*background-image: url(${featuredBanners.results[0].data.main_image.url});*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CategoriesContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 48.5% 48.5%;
  grid-row-gap: 3%;
  grid-template-columns: 48% 24% 24%;
  grid-column-gap: 2%;
  grid-template-areas:
    "panel0 panel1 panel3"
    "panel0 panel2 panel4";
`;

function HomePage() {

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
      <HomeSection>
        <Slider items={featuredBanners.results}/>
      </HomeSection>
      <section id="products-section" style={{padding: "5% 2% 5% 2%"}}>
        <Row style={{height: "12%"}}>
          <Col md={12} style={{overflowX: "hidden"}}>
            <h2>Shop Our Favourites</h2>
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