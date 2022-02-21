import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";

import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { useProductCategories } from '../../utils/hooks/useProductCategories';
import Button from "../../components/Button";
import Col from "../../components/Col";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import Pagination from "../../components/Pagination";
import { CardColumn, ProductsLayout, ProductsGrid } from './ProductList.styles';
import { capitalizeFirstLetter } from "../../utils/utils.js";

function ProductListPage() {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryCategory = searchParams.get("category");
  // If I receive any filter parameter on url, use it, if not, empty filter...
  const [filterArray, setFilterArray] = useState(queryCategory ? [queryCategory] : []);

  const [productsEndpoint, setProductsEndpoint] = useState(null);
  const [products, setProducts] = useState({});
  const prodResp = useFeaturedProducts(12, productsEndpoint);
  const [productCategories, setProductcategories] = useState({});
  const productCatResp = useProductCategories();

  const RenderCategories = () => {
    const renderedCategories = productCategories.results.map((cat, index) => {
    let category = (cat.slugs[0]).toLowerCase();
      return(
        <li key={`btn-${index}`}>
          <Button className={filterArray.indexOf(category) !== -1 ? "selected" : null} onClick={() => handleFilter(category)} style={{borderRadius: "30px", marginBottom: "4%", width: "100%"}}>
            <span style={{color: "rgb(var(--pale-green))"}}>{cat.data.name}</span>
          </Button>
        </li>
      )
    })

    return renderedCategories;
  }

  const RenderProducts = () => {
    const renderedProd = products.results.map((item, index) => {
      if(filterArray.indexOf(item.data.category.slug) !== -1 || filterArray.length === 0){// Used to show ONLY the FILTERED prod
        return(
          <CardColumn key={`slide_${index}`} md={4} lg={3}>
            <MediaCard description={`${capitalizeFirstLetter(item.data.category.slug)} $${item.data.price}`}
                      headerSize="small"
                      media={item.data.mainimage.url}
                      onClick={() => navigate(`/product/${item.id}`)}
                      showButton="Add to cart"
                      title={item.data.name} />
          </CardColumn>
        )
      }
    })

    return renderedProd;
  }

  const handleFilter = (newFilter) => {
    let index = filterArray.indexOf(newFilter);
    if(index === -1) { //If the Filter is not applied yet, add it...
      setFilterArray([...filterArray, newFilter]);
    }else { //If it was ALREADY applied, remove it...
      let newArray = filterArray.filter(item => item !== newFilter);
      setFilterArray(newArray);
    }
  }

  function handlePagination(current, desired) {
    if((desired > 0) && (desired <= products.total_pages))
      setProductsEndpoint(`%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D&page=${desired}&pageSize=12&languageCode=en-us`);
  }

  useEffect(() => {
    if (prodResp)
      setProducts(prodResp.data);

    if(productCatResp) 
      setProductcategories(productCatResp.data);
  }, [filterArray, productCatResp, prodResp]);

  return (
    <section className="content productlist-page" style={{height: "auto", padding: "0% 2% 0% 2%"}}>
      <Row> 
        <Col md={12} style={{paddingTop: "5%"}}>
          <h1 style={{paddingBottom: "0"}}>New Arrivals</h1>
        </Col>
      </Row>
      <Row> 
        <Col md={4}>
          <span>From vintage armchairs and sofas, to modern, minimalist beds and furniture; our special collection curated by Wizeliners will delight all your home&apos;s needs.</span>
        </Col>
      </Row>
      <Row style={{marginTop: "2%"}}> 
        <Col className="upper-border" md={12} style={{padding: "1.5% 0px"}}>
          <Row>
            <ProductsLayout>
              <ProductsGrid id="products-grid">
                <Row>
                {Object.keys(products).length !== 0 && <RenderProducts />}
                </Row>
                <Row>
                  <Col md={7} xl={9}/>
                  <Col md={5} xl={3} style={{alignItems: "end"}}>
                    <Pagination content={products} handlePagination={handlePagination}/>
                  </Col>
                </Row>
              </ProductsGrid>
              <Row>
                <Col md={12}>
                  <ul className='list-none'>
                    <li>
                      <Button className={filterArray.length === 0 ? "selected" : null} onClick={() => setFilterArray([])} style={{borderRadius: "30px", marginBottom: "4%", width: "100%"}}>
                        <span style={{color: "rgb(var(--pale-green))"}}>View All</span>
                      </Button>
                    </li>
                    {Object.keys(productCategories).length !== 0 && <RenderCategories />}
                  </ul>
                </Col>
              </Row>
            </ProductsLayout>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default ProductListPage;