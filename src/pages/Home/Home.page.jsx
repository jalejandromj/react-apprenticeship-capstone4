import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { useProductCategories } from '../../utils/hooks/useProductCategories';
import Carousel from '../../components/Carousel';
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import Slider from '../../components/Slider';
import { CategoriesContainer } from './Home.page.styles';

function HomePage() {
  let navigate = useNavigate();
  const [featuredBanners, setFeaturedBanners] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState({});
  const [productCategories, setProductcategories] = useState({});
  const featBannersResp = useFeaturedBanners();
  const featProdResp = useFeaturedProducts();
  const productCatResp = useProductCategories();

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
                   onClick={() => navigate(`/products?category=${cat.slugs[0]}`)}
                   style={{gridArea: `panel${index}`}}
                   title={cat.data.name} />
      )
    })

    return renderedCategories;
  }

  useEffect(() => {
    if (featBannersResp) {
      setFeaturedBanners(featBannersResp.data);
    }

    if (featProdResp) {
      setFeaturedProducts(featProdResp.data);
    }

    if(productCatResp) {
      setProductcategories(productCatResp.data);
    }
  }, [featBannersResp, featProdResp, productCatResp]);

  return (
    <section className="content home-page">
      <section id="banner-section">
        {Object.keys(featuredBanners).length !== 0 && <Slider items={featuredBanners.results}/>}
      </section>
      <section id="products-section" style={{padding: "5% 2% 5% 2%"}}>
        <Row style={{height: "12%"}}>
          <Col md={4} style={{overflowX: "hidden"}}>
            <h2>Shop Our Favourites</h2>
          </Col>
          <Col md={4} style={{overflowX: "hidden"}} centerX>
            <Link to="/products">
              <span style={{color: "rgb(var(--grayish-black))"}}>View all</span>
            </Link>
          </Col>
        </Row>
        <Row style={{height: "88%"}}>
          <Col md={12} style={{width: "100%"}}>
            {Object.keys(featuredProducts).length !== 0 && <Carousel items={featuredProducts.results}/>}
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
            {Object.keys(productCategories).length !== 0 && <RenderCategories />}
          </CategoriesContainer>
        </Row>
      </section>
      <Footer />
    </section>
  );
}

export default HomePage;