import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProductDetail } from '../../utils/hooks/useProductDetail';
import Button from "../../components/Button";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { BuyPanel } from './ProductDetail.styles';
import { capitalizeFirstLetter } from "../../utils/utils.js";

function ProductDetailPage() {
  const [productDetail, setProductDetail] = useState(null);
  const { productId } = useParams();
  const productDetailResp = useProductDetail(productId);

  useEffect(() => {
    if (Object.keys(productDetailResp.data).length !== 0)
      setProductDetail(productDetailResp.data.results);

  }, [productDetailResp]);
  console.log(productDetail);
  return (
    <section className="content productdetail-page" style={{padding: "0% 2% 0% 2%"}}>
      <section id="main-product-detail">
        <Row> 
          <Col md={12} style={{paddingTop: "5%"}}>
            <h1 style={{paddingBottom: "0"}}>{productDetail && productDetail[0].data.name}</h1>
          </Col>
        </Row>
        <Row style={{height: "80%"}}> 
          <Col md={7}>
            <h1 style={{paddingBottom: "0"}}>Carousel</h1>
          </Col>
          <BuyPanel className="left-border" md={6} >
            <Row>
              <Col md={4}>
                <label><span>Top seller in</span></label>
              </Col>
              <Col md={8} centerY>
                <label><h5 style={{margin: 0}}>{productDetail && capitalizeFirstLetter(productDetail[0].data.category.slug)}</h5></label>
              </Col>
            </Row>
            <Row>
              <span>Ul of badges of TAGS</span>
            </Row>
            <Row>
              <label><h3>$ {productDetail && productDetail[0].data.price} pc.</h3></label>
            </Row>
            <Row>
              <Col md={6}>

              </Col>
              <Col className="left-border" md={6}>
                <span>{productDetail && productDetail[0].data.stock} in stock</span>
              </Col>
            </Row>
            <Row style={{position: "absolute", bottom: "2%", left: "4%"}}>
              <Col md={12}>
                <Button className="selected" style={{width: "92%"}}>Add to cart</Button>
              </Col>
            </Row>
          </BuyPanel>
        </Row>
      </section>
      <section id="product-description">
        <Row> 
          <Col className="left-border" md={5} style={{paddingTop: "6.3%"}}>
            <Row>
              <Col md={12}><h5 style={{paddingBottom: "0"}}>Product details</h5></Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>{productDetail && productDetail[0].data.description[0].text}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}><h5 style={{paddingBottom: "0"}}>Specs</h5></Col>
            </Row>
            <Row>
              <Col md={12}>
                List ul of specs
              </Col>
            </Row>
            <Row>
              <Col md={2} centerY>
                <h5 style={{margin: 0, paddingBottom: "0"}}>SKU</h5>
              </Col>
              <Col md={10}>
                <label><span>{productDetail && productDetail[0].data.sku}</span></label>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default ProductDetailPage;