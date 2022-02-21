import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import { useSearchProducts } from '../../utils/hooks/useSearchProducts';
import Col from "../../components/Col";
import MediaCard from '../../components/MediaCard/';
import Row from "../../components/Row";
import Pagination from "../../components/Pagination";
import { CardColumn, ProductsLayout, ProductsGrid } from './SearchResult.styles';
import { capitalizeFirstLetter } from "../../utils/utils.js";

function SearchResultPage() {
  let navigate = useNavigate();
  const { search } = useGeneralContext();
  const [productsEndpoint, setProductsEndpoint] = useState(null);
  const [products, setProducts] = useState(null);
  const searchProdResp = useSearchProducts(search, productsEndpoint);

  const RenderProducts = () => products.results.map((item, index) => {

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
  });

  const handlePagination = (current, desired) => {
    if((desired > 0) && (desired <= products.total_pages))
      setProductsEndpoint(`%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D&q=%5B%5Bfulltext%28document%2C+%22${search}%22%29%5D%5D&page=${desired}&pageSize=20&languageCode=en-us`);
  }

  useEffect(() => {
    if (Object.keys(searchProdResp.data).length !== 0)
      setProducts(searchProdResp.data);
  }, [searchProdResp]);

  return (
    <section className="content searchresult-page" style={{height: "auto", padding: "0% 2% 0% 2%"}}>
      <Row> 
        <Col md={12} style={{paddingTop: "5%"}}>
          <h1 style={{paddingBottom: "0"}}>Search Result</h1>
        </Col>
      </Row>
      <Row> 
        <Col md={4}>
          {(products && products.results.length > 0) ?
            <span>Please, appreciate the products that our catalogue has to offer for your current inquiry.</span>
          :
            <span>We shall apologize... Our current catalogue cannot provide you with the products you are searching to satisfy your needs.</span>
          }
        </Col>
      </Row>
      <Row style={{marginTop: "2%"}}> 
        <Col className="upper-border" md={12} style={{padding: "1.5% 0px"}}>
          <Row>
            <ProductsLayout>
              <ProductsGrid id="products-grid">
                <Row>
                  {products && <RenderProducts />}
                </Row>
                <Row>
                  <Col md={7} xl={9}/>
                  <Col md={5} xl={3} style={{alignItems: "end"}}>
                    {(products && products.total_pages > 1) && <Pagination content={products} handlePagination={handlePagination}/>}
                  </Col>
                </Row>
              </ProductsGrid>
            </ProductsLayout>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default SearchResultPage;